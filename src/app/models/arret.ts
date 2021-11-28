export class Arret {


  private _name:string;
  private _id:number |undefined;

  constructor(name: string,id: number | undefined) {
    this._id = id;
    this._name = name;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

