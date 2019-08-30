import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss']
})
export class PlaceDetailPage implements OnInit {
  loadedPlaces: Place[];
  constructor(private router: Router,
              private navCtrl: NavController,
              private placesService: PlacesService,
              private modalCtrl: ModalController) {}
  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
     this.navCtrl.navigateBack('./bookings/createbookings');
    // this.navCtrl.pop();
  }
}
