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

// Creating You Own Operator: Creating New Operators with Observable Constructor
// https://app.pluralsight.com/course-player?clipId=aed56564-d51a-47cb-a7ca-0e34486dfb03

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

ajax("/api/books")
  .pipe(
    flatMap(ajaxResponse => ajaxResponse.response),
    // filter(book => book.publicationYear < 1950),
    // tap(oldBook => console.log(`Title: ${oldBook.title}`))
    grabAndLogClassics(1950, true)
  )
  .subscribe(
    finalValue => console.log(`VALUE: ${finalValue.title}`),
    error => console.log(`ERROR: ${error}`)
  );
