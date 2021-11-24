export class Area {

  private _name:string;
  private _id : number | undefined;


  constructor(name: string, id: number | undefined) {
    this._name = name;
    this._id = id;
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

  static fromJson(areaAsJson:any): Area {
    return new Area(
      areaAsJson.name,
      areaAsJson.id,
    );
  }

  toJson() : any {
    return {
      _name:this.name,
      _id:this.id,
    };
  }



}
