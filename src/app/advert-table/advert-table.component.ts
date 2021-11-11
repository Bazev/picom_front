import {Component, Input, OnInit} from '@angular/core';
import {Advert} from "../models/advert.model";

@Component({
  selector: 'app-advert-table',
  templateUrl: './advert-table.component.html',
  styleUrls: ['./advert-table.component.css']
})
export class AdvertTableComponent implements OnInit {

  @Input() adverts : Array<Advert> | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
