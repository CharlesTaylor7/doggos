import * as Rx from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';

export const doggo$ = fromFetch('https://api.giphy.com/v1/gifs/search?api_key=DmPaOTNJv7KLUao5cqSClP4lZjp1m3n8&q=doggo&limit=1000&offset=0&rating=G&lang=en').pipe(
  Rx.flatMap(response => response.json()),
  Rx.flatMap(json => json.data),
  Rx.map(json => json.images.original.url),
);
