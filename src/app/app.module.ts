import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgConfirmModule } from 'ng-confirm-box';



@NgModule({
  declarations: [
    AppComponent
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgConfirmModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BrowserModule]
})
export class AppModule { }
