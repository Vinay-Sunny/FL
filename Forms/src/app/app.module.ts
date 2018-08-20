import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatToolbarModule,MatIconModule,MatRadioModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { RouterModule } from '@angular/router'
import { routes } from './app.router';
import { FormsModule } from '@angular/forms'
import { Auth1Service } from './services/auth1.service' 
import { Auth2Service } from './services/auth2.service'
import {ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [Auth1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
