import {Advert} from "./advert.model";

export class SlotTime {

  private _start : number;
  private _adverts : Advert;
  private _id : number | undefined;

  constructor(start: number, adverts: Advert, id: number) {
   this._id = id;
    this._start = start;
    this._adverts = adverts;
  }

  get start(): number {
    return this._start;
  }

  set start(value: number) {
    this._start = value;
  }

  get adverts(): Advert {
    return this._adverts;
  }

  set adverts(value: Advert) {
    this._adverts = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }
}
