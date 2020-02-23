import { Observable } from 'rxjs';
import { allBooks, Book } from './data';

function subscribe(subscriber) {
    for (let book of allBooks) {
        subscriber.next(book);
    }
}

let allBooksObservable$ = new Observable(subscribe);

//allBooksObservable$.subscribe((book: Book) => console.log(book.title));
allBooksObservable$.subscribe(book => console.log(book.title));

