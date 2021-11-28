import {Arret} from "./arret";

export class Area {

  private _name:string;
  private _id: number | undefined;
  private _arrets: Array<Arret>;


  constructor(name: string, id: number | undefined, arrets:Array<Arret>) {
    this._name = name;
    this._id = id;
    this._arrets = arrets;
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


  get arrets(): Array<Arret> {
    return this._arrets;
  }

  set arrets(value: Array<Arret>) {
    this._arrets = value;
  }

static fromJson(areaAsJson:any): Area {
    return new Area(
      areaAsJson.name,
      areaAsJson.id,
      areaAsJson.arrets
    )
  }

  toJson() : any {
    return {
      _name:this.name,
      _id:this.id,
    };
  }
}
