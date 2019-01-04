import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.page.html',
  styleUrls: ['./exercice.page.scss'],
})
export class ExercicePage implements OnInit {
  private test;
  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.storage.getStorageFromLocation('translation').then((response => {
      console.log(response)
      this.test = response;
      this.matchWords(response)
    }))
  }

  matchWords(words){
    _.forEach(words, function(value) {
      console.log(value);
    });
  }

}
