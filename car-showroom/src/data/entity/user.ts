class User {
  public id: string;

  public email: string;

  public password: string;

  public role: string;

  constructor(_id: string, _email: string, _password: string, _role: string) {
    this.id = _id;
    this.email = _email;
    this.password = _password;
    this.role = _role;
  }
}

export default User;
