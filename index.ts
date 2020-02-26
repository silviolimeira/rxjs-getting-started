import { allBooks, Book, allReaders } from "./data";
import { ajax, AjaxResponse } from "rxjs/ajax";
import {
  Observable,
  of,
  from,
  fromEvent,
  concat,
  interval,
  pipe,
  throwError
} from "rxjs";
import {
  map,
  filter,
  mergeMap,
  tap,
  catchError,
  take,
  takeUntil,
  flatMap
} from "rxjs/operators";

// Creating You Own Operator: Creating New Operators from Existing Operators
// https://app.pluralsight.com/course-player?clipId=2f55540c-66c1-4b29-b658-52ea0911373e

function grabAndLogClassics(year, log) {
  return source$ => {
    return new Observable(subscriber => {
      return source$.subscribe(
        book => {
          if (book.publicationYear < year) {
            subscriber.next(book);
            if (log) {
              console.log(`Classic: ${book.title}`);
            }
          }
        },
        err => subscriber.error(err),
        () => subscriber.complete()
      );
    });
  };
}

function grabClassics(year) {
  return filter(book => book.publicationYear < year);
}

function grabAndLogClassicsWithPipe(year, log) {
  return source$ =>
    source$.pipe(
      filter(book => book.publicationYear < year),
      tap(classicBook =>
        log ? console.log(`Title: ${classicBook.title}`) : null
      )
    );
}

ajax("/api/books")
  .pipe(
    flatMap(ajaxResponse => ajaxResponse.response),
    // filter(book => book.publicationYear < 1950),
    // tap(oldBook => console.log(`Title: ${oldBook.title}`))
    // grabAndLogClassics(1950, true)
    //grabClassics(1950)
    grabAndLogClassicsWithPipe(1950, true)
  )
  .subscribe(
    finalValue => console.log(`VALUE: ${finalValue.title}`),
    error => console.log(`ERROR: ${error}`)
  );
