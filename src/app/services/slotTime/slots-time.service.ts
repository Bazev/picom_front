import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {SlotTime} from "../../models/slotTime.model";
import {Area} from "../../models/area.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SlotsTimeService {

  slotTime : BehaviorSubject<Array<SlotTime>>

  constructor(private http:HttpClient) {
    this.slotTime = new BehaviorSubject<Array<SlotTime>>([]);
    this.getSlotTimes();
  }

  getSlotTimes() {
    this.http
      .get('https://picom.herokuapp.com/ws/slots')
      .pipe(
        map((data:any)=> data.map((data:any) => SlotTime.fromJson(data))))
      .toPromise()
      .then((slotTime: Array<SlotTime>) => {
        this.slotTime.next(slotTime)
      })
  }
}
