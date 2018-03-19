import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'articles', loadChildren: 'app/articles/articles.module#ArticlesModule'},
  {path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    UsersModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
