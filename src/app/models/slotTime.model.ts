export class SlotTime {

start: number;

  constructor(start: number) {
    this.start = start;
  }

  static fromJson(slotAsJson: any): SlotTime {
    return new SlotTime(
    slotAsJson.start,
    )
  }
}
