import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, Platform } from '@ionic/angular';
import { LearnNotificationService } from '../service/learn-notification.service';
import { StorageService } from '../service/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private translations;

  constructor(private storageService: StorageService, public alertController: AlertController, private notificationService: LearnNotificationService) { 
   this.loadMyWords();
  }

  save(frenchWord, englishWord, myLevel){
    if(frenchWord && englishWord){
      this.storageService.getStorageFromLocation('translation').then((listWordsTranslated) => {
        console.log('save', listWordsTranslated)
        listWordsTranslated.push({
          created_at: new Date(),
          french: frenchWord,
          english: englishWord,
          level: parseInt(myLevel)
        })
        this.storageService.setStorageFromLocation('translation', listWordsTranslated)
        this.loadMyWords();
      })
    }
  }

  loadMyWords(){
    this.storageService.getStorageFromLocation('translation').then((val) => {
      console.log(val)
      if(val){
        this.translations = val;  
        console.log(this.translations)
      } else {
        this.storageService.setStorageFromLocation('translation', [])
      }
    })
  }

  arrayOne(n: number): any[] {
    return Array(n);
  }

  async delete(index) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to delete this word repetition?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.translations.splice(index, 1);
            this.storageService.setStorageFromLocation('translation', this.translations)
            this.loadMyWords();
          }
        }
      ]
    });

    await alert.present();
  }

  createNotification(){
    this.notificationService.createNotification();
  }

}
