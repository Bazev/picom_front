export class SlotTime {

private _start: number;

  constructor(start: number) {
    this._start = start;
  }


  get start(): number {
    return this._start;
  }

  set start(value: number) {
    this._start = value;
  }

  static fromJson(slotAsJson: any): SlotTime {
    return new SlotTime(
    slotAsJson._start,
    )
  }
}
