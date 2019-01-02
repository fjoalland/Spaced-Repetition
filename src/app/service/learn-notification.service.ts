import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
  @Injectable({
  providedIn: 'root'
})
export class LearnNotificationService {

  constructor(private localNotifications: LocalNotifications, private platform: Platform) {
    //  this.platform.ready().then(()=> {
       this.localNotifications.on('yes').subscribe(notification => {
        console.log(notification)
        alert(notification.data.secret)
         notification.data;
       });
    // })
  }

  //  getDataNotification(){
  //   return this.platform.ready().then(()=> {
  //     return this.localNotifications.on('click').subscribe(notification => {
  //       console.log(notification)
  //       alert(notification.data.secret)
  //       return notification.data;
  //      });
  //   })
  //  }

  createNotification(){
    this.platform.ready().then(()=> {
      this.localNotifications.requestPermission().then(
        (permission) => {
          console.log(permission)
          if (permission === true) {
            // Create the notification
          // Schedule delayed notification
            let dateNow = new Date(new Date().getTime());
            // let nextExerciceDate = new Date(new Date().getTime() + 288000000);
            let nextExerciceDate = new Date(new Date().getTime() + 50);

            console.log(dateNow)
            console.log(nextExerciceDate)

            this.localNotifications.schedule({
              text: "Let's go! We have to learn.",
              actions: [{ id: 'yes', title: 'Yes' }],
              trigger: {at: nextExerciceDate},
              led: 'FF0000',
              sound: null,
              data: { secret: "exercice" }
            });
          }
        }
      );
    })
  }
}
