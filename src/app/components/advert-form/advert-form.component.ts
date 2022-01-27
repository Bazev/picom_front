import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Advert} from "../../models/advert.model";
import {AuthService} from "../../services/Auth/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Area} from "../../models/area.model";
import {Subscription} from "rxjs";
import {SlotsTimeService} from "../../services/slotTime/slots-time.service";
import {AreaService} from "../../services/areas/area.service";
import {SlotTime} from "../../models/slotTime.model";
import {AdvertService} from "../../services/adverts/advert.service";


@Component({
  selector: 'app-advert-form',
  templateUrl: './advert-form.component.html',
  styleUrls: ['./advert-form.component.css'],
})
export class AdvertFormComponent implements OnInit {

  @Input() submitLabel: string;
  @Input() advertToEdit : Advert | undefined;

  formAdvert = this.fb.group({
    title: [Validators.required],
    dateStart: [Validators.required],
    dateEnd: [Validators.required],
    slotsSelected: [Validators.required],
    areasSelected:[Validators.required]
  });


  listAreas: Area[];
  slotList: SlotTime[];
  slotsSub: Subscription;
  areasSub: Subscription;
  advert : Advert;
  adverts : Advert[] = [];


  @Output() formSubmitted:EventEmitter<Advert>

  constructor(private auth: AuthService, private slotService: SlotsTimeService,
              private areaService: AreaService, private fb: FormBuilder, private advertService :AdvertService) {

    this.advert = new Advert('',new Date(),new Date(), [], [], 0)
    this.submitLabel = '';
    this.formAdvert = new FormGroup({
      title: new FormControl(),
      dateStart: new FormControl(),
      dateEnd: new FormControl(),
      areas: new FormControl(),
      slotTimes : new FormControl()
    });

    this.listAreas = [];
    this.slotList = [];
    this.slotsSub = new Subscription();
    this.areasSub = new Subscription();
    this.formSubmitted = new EventEmitter<Advert>();
  }

  ngOnInit(): void {
    this.areasSub = this.areaService
      .areas
      .subscribe(areas => {
        this.listAreas = areas
      })

    this.slotsSub = this.slotService
      .slotTime
      .subscribe(slots => {
        this.slotList = slots
      })
  }


  add(advert: Advert): void {
    this.advertService
      .addAdvert(advert)
      .subscribe(advert => this.adverts.push(advert))
  }

}
