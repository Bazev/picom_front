import {Component, OnInit} from '@angular/core';
import {Area} from "../../models/area.model";
import {Subscription} from "rxjs";
import {AreaService} from "../../services/areas/area.service";

@Component({
  selector: 'app-add-advert',
  templateUrl: './add-advert.component.html',
  styleUrls: ['./add-advert.component.css']
})
export class AddAdvertComponent implements OnInit {
  listAreas: Array<Area>;
  areasSub: Subscription;

  constructor(private areaService: AreaService) {
    this.listAreas = [];
    this.areasSub = new Subscription();
  }

  ngOnInit(): void {
    this.areasSub = this.areaService
      .areas
      .subscribe(areas =>{
        this.listAreas = areas
      })
  }
}
