import {Area} from "./area.model";
import {SlotTime} from "./slotTime.model";

export class Advert {

  private _title:string;
  private _dateStart: Date;
  private _dateEnd: Date;
  private _areas: Array<Area>;
  private _slotTimes: Array<SlotTime>;
  private _id: number | null;


  constructor(title: string, dateStart: Date, dateEnd: Date, areas: Array<Area>,
              slotTimes: Array<SlotTime>, id? :number) {
    if (typeof id === 'number') {
      this._id = id;
    } else {
      this._id = null;
    }
    this._title = title;
    this._dateStart = dateStart;
    this._dateEnd = dateEnd;
    this._areas = areas;
    this._slotTimes = slotTimes;
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

  get areas(): Array<Area> {
    return this._areas;
  }

  set areas(value: Array<Area>) {
    this._areas = value;
  }

  get slotTimes(): Array<SlotTime> {
    return this._slotTimes;
  }

  set slotTimes(value: Array<SlotTime>) {
    this._slotTimes = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get id(): number | null {
    return this._id;
  }

  set id(value: number | null) {
    this._id = value;
  }

  static fromJson(advertAsJson: any): Advert {
    return new Advert(
      advertAsJson.title,
      advertAsJson.dateStart,
      advertAsJson.dateEnd,
      advertAsJson.areas,
      advertAsJson.slotTimes,
      advertAsJson.id
    )
  }
  toJson(): any {
    return {
      _title: this.title,
      _dateStart: this.dateStart,
      _dateEnd: this.dateEnd,
      _areas: this.areas,
      _slotTimes: this.slotTimes,
    }
  }


}

