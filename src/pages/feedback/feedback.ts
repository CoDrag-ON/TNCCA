import { Component } from '@angular/core';
import {  NavController, NavParams ,AlertController} from 'ionic-angular';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  title:string
  des:string

  constructor(public alertCtrl: AlertController,private emailComposer: EmailComposer,public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

 

  insert()

  {
  	let URI = "http://endln.com/TNCCA/";

    let headers   : any    = new HttpHeaders({ 'Content-Type': 'application/json' }),
          options   : any    = { "key" : "create", "title" : this.title,
           "des" : this.des},
      

          url       : any        = URI+ "feedback.php";

      this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data : any) =>
      {
         // If the request was successful notify the user
         let email = {
          to: 'servicetncca@endln.com',
          cc: 'sam613263@endln.com',
         
         
          subject: 'Feedback TNCCA '+ this.title,
          body: this.des,
          isHtml: true
        };
        
        // Send a text message using default options
        this.emailComposer.open(email);
         this.showAlert("Submitted sucessfully")
      },
      (error : any) =>
      {
        this.showAlert("Could not submit." )
      });

  }

  showAlert(msg) {
    let alert = this.alertCtrl.create({
     
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  

}
