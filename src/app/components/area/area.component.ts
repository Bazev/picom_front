import {Component, Input, OnInit} from '@angular/core';
import {Area} from "../../models/area.model";

@Component({
  selector: '[app-area]',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  area: Area | undefined ;

  @Input() name: string |undefined

  constructor() { }

  ngOnInit(): void {
  }

}
