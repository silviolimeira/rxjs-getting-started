import { allBooks, Book, allReaders } from "./data";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { Observable, of, from, fromEvent, concat, interval } from "rxjs";
import { map, filter, mergeMap, tap } from "rxjs/operators";

// Using Operators: Importing and Using Common Operators
// https://app.pluralsight.com/course-player?clipId=14be420c-3855-4457-ad37-b37eaac9cd28

ajax('/api/books')
    .pipe(
        mergeMap(ajaxResponse => ajaxResponse.response),
        filter(book => book.publicationYear < 1950),
        tap(oldBook => console.log(`Title: ${oldBook.title}`))
    ).subscribe(
        finalValue => console.log(finalValue);
    )