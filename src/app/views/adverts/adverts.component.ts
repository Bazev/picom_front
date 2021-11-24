import {Component, Input, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Advert} from "../../models/advert.model";
import {AdvertService} from "../../services/adverts/advert.service";
import {ActivatedRoute} from "@angular/router";
import {Area} from "../../models/area.model";

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {

  @Input() id:number;
  adverts: Array<Advert>;
  advertsSub: Subscription;
  areas:Array<Area>

  constructor(private advertService: AdvertService, private route:ActivatedRoute) {
    this.id = 0;
    this.adverts = [];
    this.areas = [];
    this.advertsSub = new Subscription();
  }

  ngOnInit(): void {
    this.advertsSub = this.advertService
      .adverts
      .subscribe(adverts => {
        console.log(adverts);
        this.adverts = adverts
      })
  }

  ngOnDestroy() {
    this.advertsSub.unsubscribe()
  }
}
