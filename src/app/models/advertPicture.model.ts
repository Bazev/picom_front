import {Advert} from "./advert.model";
import {User} from "./user.model";
import {Area} from "./area.model";
import {SlotTime} from "./slotTime.model";

export class AdvertPicture extends Advert {

  constructor(dateCreate: Date, dateStart: Date, dateEnd: Date, customer: User, areas: Area, slotTime: SlotTime, content: string, id: number) {
    super(dateCreate, dateStart, dateEnd, customer, areas, slotTime, content, id);
  }
}
