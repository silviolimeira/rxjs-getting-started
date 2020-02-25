import { allBooks, Book, allReaders } from "./data";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { Observable, of, from, fromEvent, concat, interval } from "rxjs";

// Subscribing to Observables with Observers: Canceling Observable Execution with Subscription
// https://app.pluralsight.com/course-player?clipId=33c6a066-6b37-43cf-9982-a53c596f07d4

let timesDiv = document.getElementById("times");
let button = document.getElementById("timerButton");

let timer$ = interval(1000);

let timerSubscription = timer$.subscribe(
  value =>
    (timesDiv.innerHTML += `${new Date().toLocaleDateString()} (${value}) <br>`),
  null,
  () => console.log("All done!")
);

fromEvent(button, "click").subscribe(event => timerSubscription.unsubscribe());
