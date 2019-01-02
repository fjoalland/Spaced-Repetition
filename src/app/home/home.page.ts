import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, Platform } from '@ionic/angular';
import { LearnNotificationService } from '../service/learn-notification.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private translations;

  constructor(private storage: Storage, public alertController: AlertController, private notification: LearnNotificationService) { 
   this.loadMyWords();
  }

  save(frenchWord, englishWord){
    console.log(frenchWord)
    if(frenchWord && englishWord){
      this.storage.get('translation').then((listWordsTranslated) => {
        listWordsTranslated.push({
          created_at: new Date(),
          french: frenchWord,
          english: englishWord,
          level: 1
        })
        console.log(listWordsTranslated)
        this.storage.set('translation', listWordsTranslated);
        this.loadMyWords();
      });
    }
  }

  loadMyWords(){
    this.storage.get('translation').then((val) => {
      if(val){
        this.translations = val;
        console.log(this.translations)
      } else {
        this.storage.set('translation', []);
      }
    });
  }

  clearAll(){
    this.storage.set('translation', []);
    this.loadMyWords();
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
            this.storage.set('translation', this.translations);
            this.loadMyWords();
          }
        }
      ]
    });

    await alert.present();
  }

  createNotification(){
    this.notification.createNotification();
  }

}
