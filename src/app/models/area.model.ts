export class Area {

  private _name:string;
  private _id : number | undefined;


  constructor(name: string, id: number) {
  this._id = id;
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

}
