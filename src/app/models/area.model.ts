import {Arret} from "./arret";

export class Area {

name:string;
id: number | undefined;
arrets: Array<Arret>;


  constructor(name: string, id: number | undefined, arrets:Array<Arret>) {
    this.name = name;
    this.id = id;
    this.arrets = arrets;
  }


static fromJson(areaAsJson:any): Area {
    return new Area(
      areaAsJson.name,
      areaAsJson.id,
      areaAsJson.arrets
    )
  }

}
