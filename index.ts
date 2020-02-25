import { allBooks, Book, allReaders } from "./data";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { Observable, of, from, fromEvent, concat } from "rxjs";

// Subscribing to Observables with Observers: Multiple Observers Executing a Single Observable
// https://app.pluralsight.com/course-player?clipId=ef738c17-efd8-409a-933c-99841bb57025

let currentTime$ = new Observable(subscriber => {
  const timeString = new Date().toLocaleTimeString();
  subscriber.next(timeString);
  subscriber.complete();
});

currentTime$.subscribe(currentTime =>
  console.log(`Observer 1: ${currentTime}`)
);

setTimeout(() => {
  currentTime$.subscribe(currentTime =>
    console.log(`Observer 2: ${currentTime}`)
  );
}, 1000);

setTimeout(() => {
  currentTime$.subscribe(currentTime =>
    console.log(`Observer 3: ${currentTime}`)
  );
}, 2000);
