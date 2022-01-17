import {Advert} from "./advert.model";
import {Area} from "./area.model";
import {SlotTime} from "./slotTime.model";

export class AdvertPicture extends Advert {


  constructor(title: string, dateStart: Date, dateEnd: Date, customer: number, areas: Array<Area>, slotTimes: Array<SlotTime>, id: number) {
    super(title, dateStart, dateEnd, customer, areas, slotTimes, id);
  }
}
