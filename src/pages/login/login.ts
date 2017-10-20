import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppStore} from "../../app/app.store";
import {Store} from "@ngrx/store";
import {LoginAction} from "../../user/user.reducer";
import {HomePage} from "../home/home";
import {Subscription} from "rxjs";

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private username:string;
  private password:string;
  private error:boolean;
  private userStateSubscription:Subscription;

  constructor(private navCtrl: NavController,
              private store:Store<AppStore>) {
  }

  ionViewDidEnter() {
    this.userStateSubscription = this.store.select('userState').subscribe(userState => {
      this.error = userState.error;

      if (userState.user) {
        this.navCtrl.push(HomePage);
      }
    });
  }

  ionViewDidLeave() {
    this.userStateSubscription.unsubscribe();
  }

  login() {
    this.store.dispatch(new LoginAction(this.username, this.password));
  }
}
