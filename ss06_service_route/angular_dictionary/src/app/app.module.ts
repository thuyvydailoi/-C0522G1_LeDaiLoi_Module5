import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryPageComponentComponent } from './component/dictionary-page-component/dictionary-page-component.component';
import { DictionaryDetailComponentComponent } from './component/dictionary-detail-component/dictionary-detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryPageComponentComponent,
    DictionaryDetailComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
