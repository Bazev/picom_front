import { Component, OnInit } from '@angular/core';
import {Advert} from "../../models/advert.model";
import {AdvertService} from "../../services/adverts/advert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-advert-view',
  templateUrl: './add-advert-view.component.html',
  styleUrls: ['./add-advert-view.component.css']
})
export class AddAdvertViewComponent implements OnInit {

  adverts : Advert[] = [];

  constructor(private advertService:AdvertService, private router : Router) { }

  ngOnInit(): void {
  }

  submitAddAdvert(advert: Advert) {
   this.advertService
      .addAdvert(advert)
      .subscribe(advert => this.adverts.push(advert))
    this.router.navigateByUrl('adverts')
  }
}
