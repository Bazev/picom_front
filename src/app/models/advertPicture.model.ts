import {Advert} from "./advert.model";
import {User} from "./user.model";
import {Area} from "./area.model";
import {SlotTime} from "./slotTime.model";

export class AdvertPicture extends Advert {


  constructor(title: string, dateCreate: Date, dateStart: Date, dateEnd: Date, customer: User, areas: Array<Area>, slotTime: Array<SlotTime>, id: number | undefined) {
    super(title, dateCreate, dateStart, dateEnd, customer, areas, slotTime, id);
  }
}
