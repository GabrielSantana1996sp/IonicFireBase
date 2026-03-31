import { environment } from './../environments/environment.prod';
import { initializeApp } from 'firebase/app';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//
import {initializeApp,provideFirebaseApp} from '@angular/fire/app';
import {getFirestone,provideFirestone} from '@angular/fire/firestone';

import {environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    provideFirebaseApp(()=> initializeApp(environment,firebaseConfig)),
    provideFirestone(()=>getFirestone())
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
