import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase} from 'angularfire2/database';

/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MessageProvider {

  constructor(public http: HttpClient,private  afDb: AngularFireDatabase) {
    
  }

  getMessage()
  {
    return this.afDb.list('messages').valueChanges();
  }

  sendMsg(name,msg)
  {
    this.afDb.list('messages').push({name,msg});
  }

}
