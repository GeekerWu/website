import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule, JsonpModule} from '@angular/http';


import { HttpClientModule } from '@angular/common/http';



import { MyApp } from './app.component';
import {LoginPage} from '../pages/login/login'
import { HomePage } from '../pages/home/home';
import {AboutusPage} from '../pages/aboutus/aboutus';
import {VisionPage} from '../pages/vision/vision';
import {NationaltaxPage} from '../pages/nationaltax/nationaltax';
import {DomestictaxPage} from '../pages/domestictax/domestictax';


import { ListPage } from '../pages/list/list';
import { MyPage } from '../pages/my/my';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingProvider } from '../providers/settings/settings';
import {AuthProvider} from '../providers/authtoken/authtoken';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    AboutusPage,
    VisionPage,
    NationaltaxPage,
    DomestictaxPage,



    ListPage,
    MyPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    AboutusPage,
    VisionPage,
    NationaltaxPage,
    DomestictaxPage,

    ListPage,
    MyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingProvider,
    AuthProvider,

  ]
})
export class AppModule {}
