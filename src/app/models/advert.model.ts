import {User} from "./user.model";
import {Area} from "./area.model";
import {SlotTime} from "./slotTime.model";

export class Advert {

  private _title:string;
  private _dateCreate: Date;
  private _dateStart: Date;
  private _dateEnd: Date;
  private _customer: User;
  private _areas: Array<Area>;
  private _slotTime: Array<SlotTime>
  private _id: number | undefined;


  constructor(title: string, dateCreate: Date, dateStart: Date, dateEnd: Date, customer: User, areas: Array<Area>,
              slotTime: Array<SlotTime>, id: number | undefined) {
    this._title = title;
    this._dateCreate = dateCreate;
    this._dateStart = dateStart;
    this._dateEnd = dateEnd;
    this._customer = customer;
    this._areas = areas;
    this._slotTime = slotTime;
    this._id = id;
  }

  get dateCreate(): Date {
    return this._dateCreate;
  }

  set dateCreate(value: Date) {
    this._dateCreate = value;
  }

  get dateStart(): Date {
    return this._dateStart;
  }

  set dateStart(value: Date) {
    this._dateStart = value;
  }

  get dateEnd(): Date {
    return this._dateEnd;
  }

  set dateEnd(value: Date) {
    this._dateEnd = value;
  }

  get customer(): User {
    return this._customer;
  }

  set customer(value: User) {
    this._customer = value;
  }


  get areas(): Array<Area> {
    return this._areas;
  }

  set areas(value: Array<Area>) {
    this._areas = value;
  }

  get slotTime(): Array<SlotTime> {
    return this._slotTime;
  }

  set slotTime(value: Array<SlotTime>) {
    this._slotTime = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  static fromJson(advertAsJson: any): Advert {
    return new Advert(
      advertAsJson.title,
      advertAsJson.dateCreate,
      advertAsJson.dateStart,
      advertAsJson.dateEnd,
      advertAsJson.customer,
      advertAsJson.areas,
      advertAsJson.slotTime,
      advertAsJson.id,
    );
  }

  toJson(): any {
    return {
      _dateCreate: this.dateCreate,
      _dateStart: this.dateStart,
      _dateEnd: this.dateEnd,
      _customer: this.customer,
      _areas: this.areas,
      _slotTime: this.slotTime,
      _content: this.title,
      _id:this.id,
    }
  }

}
