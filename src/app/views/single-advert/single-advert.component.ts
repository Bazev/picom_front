import {Component, Input, OnInit} from '@angular/core';
import {Advert} from "../../models/advert.model";
import {AdvertService} from "../../services/adverts/advert.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Area} from "../../models/area.model";
import {Arret} from "../../models/arret";

@Component({
  selector: 'app-single-advert',
  templateUrl: './single-advert.component.html',
  styleUrls: ['./single-advert.component.css']
})
export class SingleAdvertComponent implements OnInit {

  advert : Advert | undefined;
  @Input() id : number;

  constructor(private advertService:AdvertService, private route:ActivatedRoute) {
    this.id = 0;
  }
  ngOnInit(): void {
    const id : number = this.route.snapshot.params['id'];
    this.advertService
      .getAdvertById(id)
      .then((advert:Advert) => this.advert = advert);
  }
}
