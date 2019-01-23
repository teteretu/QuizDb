import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

// import { timer } from 'rxjs/observable/timer';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public platform: Platform,
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
      platform.ready().then(() => {
        this.initializeApp();
      });
  }
  initializeApp() {

  }
  
  goQuizM() {
    this.navCtrl.parent.select(1);
  }

}
