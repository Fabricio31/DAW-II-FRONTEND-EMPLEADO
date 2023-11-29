
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button'; 
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent
  ],
  imports: [
    PasswordModule,
    DividerModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"logindaw-dsw","appId":"1:747457406853:web:5e53442cdc595f082986ec","storageBucket":"logindaw-dsw.appspot.com","apiKey":"AIzaSyA9sPRBCATCJtVHs3WFM7EDjdPIdFQRWfw","authDomain":"logindaw-dsw.firebaseapp.com","messagingSenderId":"747457406853"})),
    provideAuth(() => getAuth())
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
