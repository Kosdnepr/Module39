import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesDetailsComponent } from './articles-details/articles-details.component';
import { ArticlesService } from './articles.service';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/:id', component: ArticlesDetailsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArticlesListComponent,
    ArticlesDetailsComponent,
  ],
  providers: [ArticlesService]
})
export class ArticlesModule { }
