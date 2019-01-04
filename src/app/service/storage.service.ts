import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  getStorageFromLocation(location){
    return this.storage.get(location).then((val) => {
      return val;
    });
  }
  
  setStorageFromLocation(location, storage){
    return this.storage.set(location, storage);
  }
}
