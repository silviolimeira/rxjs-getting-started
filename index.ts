import { allBooks, Book, allReaders } from "./data";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { Observable, of, from, fromEvent, concat, interval } from "rxjs";
import { map, filter } from "rxjs/operators";

// Using Operators: Applying Operators
// https://app.pluralsight.com/course-player?clipId=df9a350e-769f-4110-8c81-c732fa8a75db

let source$ = of(1, 2, 3, 4, 5);

source$
  .pipe(
    map(value => value * 2),
    filter(mappedValue => mappedValue > 5)
  )
  .subscribe(
    finalValue => console.log(finalValue) // 6, 8, 10
  );
