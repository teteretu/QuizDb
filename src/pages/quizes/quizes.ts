import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-quizes',
  templateUrl: 'quizes.html',
})
export class QuizesPage {
  constructor(public data: Data,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  articles;
  category;
  sub;
  ionViewDidLoad() {

    this.category = this.navParams.get('category');
    this.sub = this.navParams.get('sub');
    console.log('ionViewDidLoad LearnCategoryPage with category: ' + this.category);
  }

  goArticle(x) {
    this.data.category = this.category;
    this.data.sub = this.sub;
    this.data.quiz = x;
    this.navCtrl.push('QuizPage', { sub: this.sub, category: this.category, article: x });
  }

}
