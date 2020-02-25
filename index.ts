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
import { map, filter, mergeMap, tap, catchError, take, takeUntil } from "rxjs/operators";

// Using Operators: Controling the Number of Values Produced
// https://app.pluralsight.com/course-player?clipId=a3a6fd9c-2370-449b-a798-26a85bc67505

let timesDiv = document.getElementById("times");
let button = document.getElementById("timerButton");

let timer$ = new Observable(subscriber => {
  let i = 0;
  let intervalID = setInterval(() => {
    subscriber.next(i++);
  }, 1000);

  return () => {
    console.log("Executing teardown code.");
    clearInterval(intervalID);
  };
});

let cancelTimer$ = fromEvent(button, 'click');

timer$.pipe(takeUntil(cancelTimer$)).subscribe(
  value =>
    (timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br>`),
  null,
  () => console.log("All done!")
);
