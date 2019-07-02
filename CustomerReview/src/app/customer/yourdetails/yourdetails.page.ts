import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-yourdetails',
  templateUrl: './yourdetails.page.html',
  styleUrls: ['./yourdetails.page.scss'],
})
export class YourdetailsPage implements OnInit {

  constructor(private navCtrl: NavController) { }
onClick() {
    this.navCtrl.navigateForward('/customer/yourdetails');
}
  ngOnInit() {
  }
}
