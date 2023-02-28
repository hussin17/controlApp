import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private platform: Platform
  ) {}

  start() {
    console.log('power && heigh volume && low volume is running');
    this.platform.backButton.closed;
  }

  stop() {
    console.log('power && heigh volume && low volume is locked');
  }

}
