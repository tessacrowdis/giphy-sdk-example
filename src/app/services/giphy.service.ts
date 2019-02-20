import { Injectable } from '@angular/core';

import * as GphApiClient from 'giphy-js-sdk-core';

@Injectable()
export class GiphyService {

  constructor() { }

  public termSuggestions(keyword: string = 'cool', yourKey: string) {
    if (!yourKey) { console.log('You must provide a key to continue'); return null; }

    const giphy = GphApiClient(yourKey);
    return giphy.termSuggestions(keyword)
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  public search(tag: string = 'cool', yourKey: string) {
    if (!yourKey) { console.log('You must provide a key to continue'); return null; }

    const giphy = GphApiClient(yourKey);
    return giphy.search('gifs', { 'q': tag, 'sort': 'relevant' })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

}
