import {Area} from "./area.model";
import {SlotTime} from "./slotTime.model";

export class Advert {
  title: string;
  dateStart: Date;
  dateEnd: Date;
  areas: Area[];
  slotTimes: SlotTime[];
  id: number | null;

  constructor(dateStart: Date, dateEnd: Date, areas: Area[], slotTimes: SlotTime[],title: string, id?: number) {
    if (typeof id === 'number') {
      this.id = id;
    } else {
      this.id = null;
    }
    this.title = title;
    this.dateStart = dateStart;
    this.dateEnd = dateEnd;
    this.areas = areas;
    this.slotTimes = slotTimes;
  }

  static fromJson(advertAsJson: any): Advert {
    return new Advert(
      advertAsJson.dateStart,
      advertAsJson.dateEnd,
      advertAsJson.slotTimes,
      advertAsJson.areas,
      advertAsJson.title,
    )
  }



}

