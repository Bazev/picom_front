import { Injectable } from '@angular/core';
import {BehaviorSubject, map} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Area} from "../../models/area.model";

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  areas: BehaviorSubject<Array<Area>>;

  constructor(private http:HttpClient) {
    this.areas = new BehaviorSubject<Array<Area>>([]);
    this.getAreas();
  }

  getAreas() {
    this.http
      .get('https://picom.herokuapp.com/ws/zones')
      .pipe(
        map((data:any)=> data.map((data:any) => Area.fromJson(data))))
      .toPromise()
      .then((areas: Array<Area>) => {
        this.areas.next(areas)
      })
  }

}

