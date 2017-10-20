import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppStore} from "../../app/app.store";
import {User} from "../../user/user";
import {Subscription} from "rxjs";
import {NavController} from "ionic-angular";

@Component({
  selector: 'home',
  templateUrl: 'home.html'
})

export class HomePage {

  private user:User;
  private userStateSubscription:Subscription;

  constructor(private navCtrl:NavController,
              private store:Store<AppStore>) {
  }

  ionViewDidEnter() {
    this.userStateSubscription = this.store.select('userState').subscribe(userState => {
      this.user = userState.user;
    });
  }

  ionViewDidLeave() {
    this.userStateSubscription.unsubscribe();
  }
}
