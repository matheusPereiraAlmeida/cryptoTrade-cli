import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SelectionComponent } from './selection/selection.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { SuccessComponent } from './success/success.component';

//impor necessário pro dropdown
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  }   from '@angular/forms';

//import do http
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SelectionComponent,
    ConfirmationComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
