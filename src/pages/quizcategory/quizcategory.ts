import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-quizcategory',
  templateUrl: 'quizcategory.html',
})
export class QuizcategoryPage {

  category;
  sub;
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.category = this.navParams.get('category');
    console.log('ionViewDidLoad LearnCategoryPage with category: ' + this.category);
  }

  goQuizes(x) {

    this.navCtrl.push('QuizesPage', { sub: x, category: this.category });
  }

}
