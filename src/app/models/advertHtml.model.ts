import {Advert} from "./advert.model";
import {Area} from "./area.model";
import {User} from "./user.model";
import {SlotTime} from "./slotTime.model";

export class AdvertHtml extends Advert {

  private _content : string;


  constructor(title: string, dateCreate: Date, dateStart: Date, dateEnd: Date, customer: User, areas: Array<Area>, slotTime: Array<SlotTime>, id: number | undefined, content: string) {
    super(title, dateCreate, dateStart, dateEnd, customer, areas, slotTime, id);
    this._content = content;
  }
}
