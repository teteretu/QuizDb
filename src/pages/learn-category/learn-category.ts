import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-learn-category',
  templateUrl: 'learn-category.html',
})
export class LearnCategoryPage {

category;
sub;
  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.category=this.navParams.get('category');
    console.log('ionViewDidLoad LearnCategoryPage with category: '+this.category);
  }

  goArticles(x){
    this.navCtrl.push('ArticlesPage', {sub:x,category:this.category});
  }

}
  