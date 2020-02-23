import { allBooks, Book, allReaders } from './data';
import { Observable, of, from, fromEvent, concat } from 'rxjs';


// Creating Observables: Creating Observables from Existing Data

let source1$ = of('hello', 10, true, allReaders[0].name);

//source1$.subscribe(value => console.log(value));

let source2$ = from(allBooks);

//source2$.subscribe(book => console.log(book.title));

// produces the two values
concat(source1$, source2$)
    .subscribe(value => console.log(value));

