import { allBooks, Book, allReaders } from "./data";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { Observable, of, from, fromEvent, concat } from "rxjs";

// Subscribing to Observables with Observer
// https://app.pluralsight.com/course-player?clipId=af2049ec-fcd3-42a9-94eb-b2aaad5cb708

let books$ = from(allBooks);

// let booksObserver = {
//   next: book => console.log(`Title: ${book.title}`),
//   error: err => console.log(`ERROR: ${err}`),
//   complete: () => console.log(`All done!`)
// };

// books$.subscribe(booksObserver);

books$.subscribe(
  book => console.log(`Title: ${book.title}`),
  err => console.log(`ERROR: ${err}`),
  () => console.log(`All done! 1`)
);
