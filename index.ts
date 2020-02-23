import { allBooks, Book, allReaders } from './data';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { Observable, of, from, fromEvent, concat } from 'rxjs';


// Creating Observables: Making Ajax Requests with RxJS
//https://app.pluralsight.com/course-player?clipId=38609224-e746-48f1-9c44-9643cb14c1ae


let button = document.getElementById('readersButton');

fromEvent(button, 'click')
    .subscribe(event => {

        ajax('/api/readers')
            .subscribe(ajaxResponse => {
                console.log(ajaxResponse);

                let readers = ajaxResponse.response;

                let readersDiv = document.getElementById('readers');

                for (let reader of readers) {
                    readersDiv.innerHTML += reader.name + '<br>';
                }

            })
    });



