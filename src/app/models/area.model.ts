import {Arret} from "./arret";

export class Area {

private _name:string;
private _arrets: Array<Arret>;


  constructor(name: string, arrets:Array<Arret>) {
    this._name = name;
    this._arrets = arrets;
  }


  get name(): string {
    return this._name;
  }

  get arrets(): Array<Arret> {
    return this._arrets;
  }

  static fromJson(areaAsJson:any): Area {
    return new Area(
      areaAsJson._name,
      areaAsJson._arrets
    )
  }

}
