import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;
  title = "ערימות של חדשות"
  share = 'שיתוף';
  read = 'קריאה';

  constructor(private newsApi: NewsApiService) {}

  ngOnInit(): void {
    // Load articles
    this.newsApi
      .initArticles()
      .subscribe(data => (this.mArticles = data['articles']));

    // Load news sources
    this.newsApi
      .initSources()
      .subscribe(data => (this.mSources = data['sources']));
  }

  searchArticles(source) {
    console.log('Source selected is ' + source);
    this.newsApi
      .getArticlesByID(source)
      .subscribe(data => this.mArticles = data['articles']);
  }
}
