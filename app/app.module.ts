import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpModule} from "@angular/http";

import { HttpClient, HttpClientModule } from '@angular/common/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { IngresoPage } from '../pages/ingreso/ingreso';
import { ConviertetePage } from '../pages/conviertete/conviertete';
import { InstructorPage } from '../pages/instructor/instructor';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
	LoginPage,
	RegistroPage,
	IngresoPage,
	ConviertetePage,
	InstructorPage
	
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp),
	HttpClientModule
	
	
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	LoginPage,
	RegistroPage,
	IngresoPage,
	ConviertetePage,
	InstructorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
