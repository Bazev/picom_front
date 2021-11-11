import {Component, Input, OnInit} from '@angular/core';
import {AdvertService} from "../services/adverts/advert.service";

@Component({
  selector: '[app-adverts-table-line]',
  templateUrl: './adverts-table-line.component.html',
  styleUrls: ['./adverts-table-line.component.css']
})
export class AdvertsTableLineComponent implements OnInit {

  // @Input() id : number;
  // @Input() title : string | undefined;
  // @Input() dateStart : Date | undefined;
  // @Input() dateEnd : Date | undefined;


  constructor() {
   // this.id = 0;
  }

  ngOnInit(): void {
  }

}
