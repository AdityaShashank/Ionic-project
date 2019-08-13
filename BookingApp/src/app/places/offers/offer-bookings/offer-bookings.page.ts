import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';


@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  loadedPlace: Place[];

  constructor(private placesService: PlacesService) { }

  ngOnInit() {
    this.loadedPlace = this.placesService.places;
  }

}
