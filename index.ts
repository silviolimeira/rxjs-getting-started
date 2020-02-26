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
  throwError,
  Subject
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

// Using Subjects and Multicasted Observables: Using Subject to Convert an Observable from Cold to Hot
//app.pluralsight.com/course-player?clipId=5e57c874-a0fc-4737-955d-b7b5f6733d99
// Using Subjects and Multicasted Observables

// example cold observable

https: let source$ = interval(1000).pipe(take(4));

// convert to hot observable - multicast the value
let subject$ = new Subject();
source$.subscribe(subject$);

subject$.subscribe(value => console.log(`Observer 1: ${value}`));

setTimeout(() => {
  subject$.subscribe(value => console.log(`Observer 2: ${value}`));
}, 1000);

setTimeout(() => {
  subject$.subscribe(value => console.log(`Observer 3: ${value}`));
}, 2000);
