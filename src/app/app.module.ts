import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components 
import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SuccessComponent } from './success/success.component';

//impor necessário pro dropdown
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

//import do http
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    ConfirmationComponent,
    SuccessComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
