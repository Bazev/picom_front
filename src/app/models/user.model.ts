export class User {

  private _id: number;
  private _email: string;
  private _first_name: string;
  private _last_name: string;
  private _password: string;

  constructor(email: string, password: string, first_name: string, last_name: string, id: number) {
    this._password = password;
    this._email = email;
    this._first_name = first_name;
    this._last_name = last_name;
    this._id = id;
  }


  get id(): number{
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }


  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  static fromJson(userAsJson: any): User {
    return new User(
      userAsJson.email,
      userAsJson.password,
      userAsJson.first_name,
      userAsJson.last_name,
      userAsJson._id,
    );
  }

  toJson(): any {
    return {
      _email: this.email,
      _password: this.password,
      _first_name: this.first_name,
      _last_name: this.last_name,
    };
  }
}
