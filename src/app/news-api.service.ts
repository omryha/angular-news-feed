import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key = '34f33f338eaa46acb881602236496250';

  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?&apiKey=' + this.api_key
    );
  }

  initArticles() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?country=il&apiKey=' +
        this.api_key
    );
  }

  getArticlesByID(source: string) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
