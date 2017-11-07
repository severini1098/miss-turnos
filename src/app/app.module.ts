import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage, ListPage, TurnosPage, PacientePage, AddPacientePage } from '../pages/pages';
import { TurnosApi } from '../shared/turnos-api';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage, 
    TurnosPage, 
    PacientePage, 
    AddPacientePage
  ],
  imports: [
    BrowserModule,    
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TurnosPage,
    PacientePage,
    AddPacientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, 
    TurnosApi    
  ]
})
export class AppModule {}
