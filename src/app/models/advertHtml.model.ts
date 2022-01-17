import {Advert} from "./advert.model";
import {Area} from "./area.model";
import {SlotTime} from "./slotTime.model";

export class AdvertHtml extends Advert {

  private _content : string;


  constructor(title: string, dateStart: Date, dateEnd: Date, customer: number, areas: Array<Area>, slotTimes: Array<SlotTime>, id: number, content: string) {
    super(title, dateStart, dateEnd, customer, areas, slotTimes, id);
    this._content = content;
  }
}
