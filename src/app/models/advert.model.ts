import {Area} from "./area.model";
import {SlotTime} from "./slotTime.model";

export class Advert {

  private _title: string;
  private _dateStart: Date;
  private _dateEnd: Date;
  private _areas: Array<Area>;
  private _slotTimes: SlotTime[];
  private _id: number | null;

  constructor(dateStart: Date, dateEnd: Date, areas: Area[], slotTimes: SlotTime[],title: string, id?: number) {
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


  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
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

  get areas(): Area[] {
    return this._areas;
  }

  set areas(value: Area[]) {
    this._areas = value;
  }

  get slotTimes(): SlotTime[] {
    return this._slotTimes;
  }

  set slotTimes(value: SlotTime[]) {
    this._slotTimes = value;
  }

  get id(): number | null {
    return this._id;
  }

  set id(value: number | null) {
    this._id = value;
  }

  static fromJson(advertAsJson: any): Advert {
    return new Advert(
      advertAsJson._dateStart,
      advertAsJson._dateEnd,
      advertAsJson._slotTimes,
      advertAsJson._areas,
      advertAsJson._title,
    )
  }



}

