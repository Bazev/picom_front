import {Component, OnInit} from '@angular/core';
import {Advert} from "../../models/advert.model";
import {AdvertService} from "../../services/adverts/advert.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {


  constructor(private advertService:AdvertService, private router: Router) {
  }

  ngOnInit(): void {
  }


  onSubmitAddAdvert(advert: Advert): void {
    this.advertService
      .save(advert)
      .then(() => {
        this.router.navigateByUrl('adverts')
      });

  }
}
