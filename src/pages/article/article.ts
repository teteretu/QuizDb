import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  category;
  sub;
  article;
data;
  ionViewDidLoad() {
    this.category=this.navParams.get('category');
    this.sub=this.navParams.get('sub');
    this.article = this.navParams.get('article');
    console.log('ionViewDidLoad ArticlePage');
  }

}
