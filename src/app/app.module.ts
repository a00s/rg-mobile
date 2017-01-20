import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { EmailAddressPage } from '../pages/email-address/email-address';
import { CreatePasswordPage } from '../pages/create-password/create-password';
import { EnterBirthdayPage } from '../pages/enter-birthday/enter-birthday';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreateAccountPage,
    EmailAddressPage,
    CreatePasswordPage,
    EnterBirthdayPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreateAccountPage,
    EmailAddressPage,
    CreatePasswordPage,
    EnterBirthdayPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
