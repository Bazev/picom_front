export class Area {

  private _name:string;
  private _id : number | null;


  constructor(name: string, id?: number) {
    if (typeof id === 'number') {
      this._id = id;
    }else {
      this._id = null;
    }
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): number | null {
    return this._id;
  }

  set id(value: number | null) {
    this._id = value;
  }
}
