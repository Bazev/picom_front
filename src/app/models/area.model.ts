import {Arret} from "./arret";

export class Area {

private _name:string;
id: number | undefined;
private _arrets: Array<Arret>;


  constructor(name: string, id: number | undefined, arrets:Array<Arret>) {
    this._name = name;
    this.id = id;
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
      areaAsJson.id,
      areaAsJson._arrets
    )
  }

}
