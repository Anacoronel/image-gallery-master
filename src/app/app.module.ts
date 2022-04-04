import {  BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ImagesService } from 'src/app/service/images.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './component/body/body.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DragDropModule, 
    ReactiveFormsModule,
     ModalModule,
     BrowserAnimationsModule
  ],


  providers: [ ImagesService, BsModalService, BsModalRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
