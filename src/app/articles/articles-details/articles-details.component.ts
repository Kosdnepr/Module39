import { Component, OnInit } from '@angular/core';
import { Article } from '../models/articles';
import { ArticlesService } from '../articles.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-articles-details',
  templateUrl: './articles-details.component.html',
  styleUrls: ['./articles-details.component.css']
})
export class ArticlesDetailsComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = +params.get('id');
        return this.articlesService.getArticle(id)
    })
    .subscribe((data) => this.article = data);
  }

}
