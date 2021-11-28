import {Advert} from "./advert.model";
import {User} from "./user.model";
import {Area} from "./area.model";
import {SlotTime} from "./slotTime.model";
import {Arret} from "./arret";

export class AdvertPicture extends Advert {


  constructor(id: number | undefined, title: string, dateCreate: Date, dateStart: Date, dateEnd: Date, customer: User, areas: Array<Area>, slotTimes: Array<SlotTime>, arrets: Array<Arret>) {
    super(id, title, dateCreate, dateStart, dateEnd, customer, areas, slotTimes, arrets);
  }
}
