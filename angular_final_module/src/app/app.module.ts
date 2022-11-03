import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SoTietKiemEditComponent } from './so_tiet_kiem/so-tiet-kiem-edit/so-tiet-kiem-edit.component';
import { SoTietKiemListComponent } from './so_tiet_kiem/so-tiet-kiem-list/so-tiet-kiem-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SoTietKiemEditComponent,
    SoTietKiemListComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
