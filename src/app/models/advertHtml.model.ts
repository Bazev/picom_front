import {Advert} from "./advert.model";
import {Area} from "./area.model";
import {User} from "./user.model";
import {SlotTime} from "./slotTime.model";

export class AdvertHtml extends Advert {

  private _content : string;

  constructor(dateCreate: Date, dateStart: Date, dateEnd: Date, customer: User, areas: Area, slotTime: SlotTime, title: string, id: number, content: string) {
    super(dateCreate, dateStart, dateEnd, customer, areas, slotTime, title, id);
    this._content = content;
  }
}
