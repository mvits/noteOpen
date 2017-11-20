import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NotasService } from '../services/notas.service';
import { DetallePage } from '../pages/detalle/detalle';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


export const firebaseConfig = {
  apiKey: "AIzaSyDurCoVNqQQYbYTNLtCzXyewlK94cXBFmM",
  authDomain: "noteopen-2b8f9.firebaseapp.com",
  databaseURL: "https://noteopen-2b8f9.firebaseio.com",
  storageBucket: "noteopen-2b8f9.appspot.com",
  messagingSenderId: "86269464477"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NotasService
  ]
})
export class AppModule {}
