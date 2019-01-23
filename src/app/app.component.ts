import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
// import { DatabaseProvider } from '../providers/database/database';

import { timer } from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  showSplash = true;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    // private databaseProvider: DatabaseProvider
    ) {
    platform.ready().then(() => {
      this.initializeApp();
    });

  }

  initializeApp() {
    this.platform.ready().then(_ => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      timer(3000).subscribe(_ => this.showSplash = false)
    });

    // this.databaseProvider.createDatabase()
    //   .then(() => {
    //     console.log("DB iniciado com sucesso");
    //   })
    //   .catch(err => console.error(err));

  }

}
