import { allBooks, Book, allReaders } from './data';
import { Observable, of, from, fromEvent, concat } from 'rxjs';


// Creating Observables: Creating Observables to Handle Events
//https://app.pluralsight.com/course-player?clipId=976e2d54-dba4-46d8-b544-9b940339c9ca

let button = document.getElementById('readersButton');

fromEvent(button, 'click')
    .subscribe(event => {
        console.log(event);

        let readersDiv = document.getElementById('readers');

        for (let reader of allReaders) {
            readersDiv.innerHTML += reader.name + '<br>';
        }
    });



