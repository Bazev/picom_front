import {Advert} from "./advert.model";

export class SlotTime {

  private _start: number;
  private _id: number | undefined;

  constructor(start: number, id: number) {
    this._id = id;
    this._start = start;
  }

  get start(): number {
    return this._start;
  }

  set start(value: number) {
    this._start = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  static fromJson(slotTimeAsJson: any): SlotTime {
    return new SlotTime(
      slotTimeAsJson.id,
      slotTimeAsJson.start,
    );
  }
  toJson(): any {
    return {
      _id : this.id,
      _start : this.start,
    };
  }

}
