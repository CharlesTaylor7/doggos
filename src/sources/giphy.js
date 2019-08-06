import * as Rx from 'rxjs/operators';
import * as Observable from 'rxjs';
import { fromFetch } from 'rxjs/fetch';

const apiKey = 'DmPaOTNJv7KLUao5cqSClP4lZjp1m3n8';
const responseLimit = 100;

export const giphy$ = query => fromFetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=${responseLimit}&offset=0&rating=G&lang=en`).pipe(
  Rx.flatMap(response => response.json()),
  Rx.flatMap(json => json.data),
  Rx.map(json => json.images.original.url),
);

export const doggo$ = giphy$('doggo');
export const catto$ = giphy$('catto');
export const bunno$ = giphy$('bunno');

export const animalKingdom$ = Observable.zip(doggo$, catto$, bunno$)
  .pipe(
    Rx.flatMap(array => array)
  );