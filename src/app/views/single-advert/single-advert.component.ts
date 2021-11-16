import { Component, OnInit } from '@angular/core';
import {Advert} from "../../models/advert.model";
import {AdvertService} from "../../services/adverts/advert.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-advert',
  templateUrl: './single-advert.component.html',
  styleUrls: ['./single-advert.component.css']
})
export class SingleAdvertComponent implements OnInit {

  advert : Advert | undefined;

  constructor(private advertService:AdvertService, private route:ActivatedRoute, private router:Router) {
  }


  ngOnInit(): void {
    const id : number = this.route.snapshot.params['id'];
    this.advertService
      .getAdvertById(id)
      .then((advert:Advert) => this.advert = advert);
  }
}
