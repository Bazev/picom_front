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

  @Input() id:number;
  adverts: Array<Advert>;
  advertsSub: Subscription;

  constructor(private advertService: AdvertService) {
    this.id = 0;
    this.adverts = [];
    this.advertsSub = new Subscription();
  }

  ngOnInit(): void {
    this.advertsSub = this.advertService
      .getAdverts()
      .subscribe(adverts => {
        this.adverts = adverts
      })
  }

  ngOnDestroy() {
    this.advertsSub.unsubscribe()
  }
}
