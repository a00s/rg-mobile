import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TermsandconditionsPage } from '../termsandconditions/termsandconditions';
import { InitDatabase } from '../../providers/init-database';
import { ScheduleMedication } from '../../providers/schedule-medication';
import { ContactRGIPage } from '../contact-rgi/contact-rgi';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [InitDatabase, ScheduleMedication]
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private db: InitDatabase, private schedmed: ScheduleMedication) {
    console.log("Inicia banco de dados");
    this.db.createDatabase();
  }

  ionViewDidLoad() {
    this.schedmed.setAlarms();
  }

  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sorry!',
      message: 'That feature has not been implemented yet!',
      buttons: ['Ok']
    });
    alert.present()
  }

  createAccount() {
    this.navCtrl.push(TermsandconditionsPage);
  }

  gotoLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  gotoContactRGI() {
    this.navCtrl.push(ContactRGIPage);
  }

  dropDatabase() {
    this.db.dropDatabase();
  }

}
