import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleFormComponent,
    ArticleViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // BrowserModule,
    ArticleRoutingModule
  ],
})
export class ArticleModule { }
