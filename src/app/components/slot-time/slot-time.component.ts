import {Component, Input, OnInit} from '@angular/core';
import {SlotTime} from "../../models/slotTime.model";

@Component({
  selector: '[app-slot-time]',
  templateUrl: './slot-time.component.html',
  styleUrls: ['./slot-time.component.css']
})
export class SlotTimeComponent implements OnInit {

  slotTime : SlotTime | undefined

  @Input() start : number | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
