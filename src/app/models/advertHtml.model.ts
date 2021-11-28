import {Advert} from "./advert.model";
import {Area} from "./area.model";
import {User} from "./user.model";
import {SlotTime} from "./slotTime.model";
import {Arret} from "./arret";

export class AdvertHtml extends Advert {

  private _content : string;


  constructor(id: number | undefined, title: string, dateCreate: Date, dateStart: Date, dateEnd: Date, customer: User, areas: Array<Area>, slotTimes: Array<SlotTime>, arrets: Array<Arret>, content: string) {
    super(id, title, dateCreate, dateStart, dateEnd, customer, areas, slotTimes, arrets);
    this._content = content;
  }
}
