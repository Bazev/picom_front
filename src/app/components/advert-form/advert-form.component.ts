import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Advert} from "../../models/advert.model";
import {AuthService} from "../../services/Auth/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Area} from "../../models/area.model";
import {Subscription} from "rxjs";
import {SlotsTimeService} from "../../services/slotTime/slots-time.service";
import {AreaService} from "../../services/areas/area.service";
import {SlotTime} from "../../models/slotTime.model";
import {AdvertPicture} from "../../models/advertPicture.model";
import {AdvertService} from "../../services/adverts/advert.service";

@Component({
  selector: 'app-advert-form',
  templateUrl: './advert-form.component.html',
  styleUrls: ['./advert-form.component.css']
})
export class AdvertFormComponent implements OnInit {
  formAdvert = this.fb.group({
    title: [Validators.required],
    dateStart: [Validators.required],
    dateEnd: [Validators.required],
    slots: [Validators.required],
    areas:[Validators.required]
  });
  @Input() submitLabel: string;
  areasSub: Subscription;
  listAreas: Array<Area>;
  slots: FormControl
  slotList: Array<SlotTime>;
  slotsSub: Subscription;
  advert: AdvertPicture;

  @Output() formSubmitted:EventEmitter<AdvertPicture>

  constructor(private auth: AuthService, private slotService: SlotsTimeService,
              private areaService: AreaService, private fb: FormBuilder, private advertServ:AdvertService) {
    this.submitLabel = '';
    const id = this.auth.currentUserValue.id
    this.formAdvert = new FormGroup({
      title: new FormControl(),
      dateStart: new FormControl(),
      dateEnd: new FormControl(),
      areas: new FormControl(),
      slots: new FormControl()
    });
    this.areasSub = new Subscription();
    this.listAreas = [];
    this.slotList = [];
    this.slots = new FormControl([]);
    // this.formAreas = new FormControl([]);
    this.slotsSub = new Subscription();
    this.formSubmitted = new EventEmitter<Advert>();
    this.advert = new AdvertPicture("", new Date(), new Date(), 0, new Array<Area>(), new Array<SlotTime>(), id)

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


  onSubmitForm() : void {
    if (this.formAdvert.valid) {
      this.formSubmitted.emit(this.advert);
      console.log("Ajout d'une annonce")
    }
  }

}
