import { Observable } from 'rxjs';
import { allBooks, Book } from './data';

let allBooksObservable$ = new Observable.create(subscriber => {

    if (document.title !== 'RxBookTracker') {
        subscriber.error('Incorrect page title.');
    }

    for (let book of allBooks) {
        subscriber.next(book);
    }

    setTimeout(() => {
        subscriber.complete();
    }, 5000);

    return () => console.log('Executing teardown code.');

});

allBooksObservable$.subscribe(book => console.log(book.title));