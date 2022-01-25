import {Advert} from "./advert.model";

export class SlotTime {

start: number;
id: number | undefined;

  constructor(start: number, id: number) {
    this.start = start;
    this.id = id;
  }

  static fromJson(slotAsJson: any): SlotTime {
    return new SlotTime(
    slotAsJson.start,
      slotAsJson.id
    )
  }
}
