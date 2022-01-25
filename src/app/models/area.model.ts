import {Arret} from "./arret";

export class Area {

 name:string;
 arrets: Array<Arret>;


  constructor(name: string, arrets:Array<Arret>) {
    this.name = name;
    this.arrets = arrets;
  }



  static fromJson(areaAsJson:any): Area {
    return new Area(
      areaAsJson.name,
      areaAsJson.arrets
    )
  }

}
