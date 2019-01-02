import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// SqlLite
import { IonicStorageModule } from '@ionic/storage';
import { LearnNotificationService } from './service/learn-notification.service';
import { PhonegapLocalNotification } from '@ionic-native/phonegap-local-notification/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ExerciceComponent } from './exercice/exercice.component';

@NgModule({
  declarations: [AppComponent, ExerciceComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LearnNotificationService,
    PhonegapLocalNotification,
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
