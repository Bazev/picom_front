export class User {


private _id: number | undefined;
email: string;
first_name: string;
last_name: string;
password: string;

  constructor(email: string, password: string, first_name: string, last_name: string, id: number | undefined) {
    this.password = password;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this._id = id;
  }

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  static fromJson(userAsJson: any): User {
    return new User(
      userAsJson.email,
      userAsJson.password,
      userAsJson.first_name,
      userAsJson.last_name,
      userAsJson._id
    );
  }

  toJson(): any {
    return {
      _email: this.email,
      _password: this.password,
      _first_name: this.first_name,
      _last_name: this.last_name
    };
  }
}
