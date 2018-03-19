import { Injectable } from '@angular/core';

import { Article } from './models/articles';
import { ARTICLES } from './articles-mock';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ArticlesService {
  articles: Article[] = ARTICLES;

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(this.articles);
  }

  getArticle(id: number): Observable<Article> {
    return of(this.articles.find((a) => a.id === id));
  }

}
