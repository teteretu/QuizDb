import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-articles',
  templateUrl: 'articles.html',
})
export class ArticlesPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  articles;
  category;
  sub;
  ionViewDidLoad() {
    
    this.category=this.navParams.get('category');
    this.sub=this.navParams.get('sub');
    console.log('ionViewDidLoad LearnCategoryPage with category: '+this.category);
  }

  goArticle(x){
    this.navCtrl.push('ArticlePage',{sub:this.sub, category:this.category,article:x});
  }

}
