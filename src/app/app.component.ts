import { Component, Input } from '@angular/core';
import { GiphyService } from './services/giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiKey: string;
  gifSearch: string;
  gifSuggest: string;
  searchResults: string;
  termSuggestionResults: string;

  constructor(private _giphy: GiphyService) {}

  public termSuggestion() {
    this.termSuggestionResults = this._giphy.termSuggestions(this.gifSuggest, this.apiKey);
  }

  public search() {
    this.searchResults = this._giphy.search(this.gifSearch, this.apiKey);
  }

}
