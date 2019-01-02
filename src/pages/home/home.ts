import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LearnCategoryPage } from '../learn-category/learn-category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  learn() {
    this.navCtrl.push(LearnCategoryPage);
  }


}
