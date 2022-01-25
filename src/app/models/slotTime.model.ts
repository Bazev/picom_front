export class SlotTime {

private _start: number;

  constructor(start: number) {
    this._start = start;
  }


  get start(): number {
    return this._start;
  }

  static fromJson(slotAsJson: any): SlotTime {
    return new SlotTime(
    slotAsJson._start,
    )
  }
}
