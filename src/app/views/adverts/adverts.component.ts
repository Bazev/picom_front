import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Advert} from "../../models/advert.model";
import {AdvertService} from "../../services/adverts/advert.service";

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
  adverts: Array<Advert>
  advertsSub: Subscription;


  constructor(private advertService: AdvertService) {
    this.advertsSub = new Subscription();
    this.adverts = [];
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
