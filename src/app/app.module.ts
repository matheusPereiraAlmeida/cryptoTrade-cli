import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SelectionComponent } from './components/selection/selection.component';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component'

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    MainComponent,
    AlertModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent],
  entryComponents: [AlertModalComponent]
})
export class AppModule { }
