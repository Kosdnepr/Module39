import { Component, OnInit } from '@angular/core';

import { Article } from '../models/articles';
import { ArticlesService } from '../articles.service'
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles$: Observable<Article[]>;
  selectedArticle: Article = null;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articles$ = this.articlesService.getArticles();
  }


}
