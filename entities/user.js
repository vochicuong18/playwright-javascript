export default class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  static get Builder() {
    return class UserBuilder {
      constructor() {
        this.email = null;
        this.password = null;
      }

      setEmail(email) {
        this.email = email;
        return this;
      }
      setPassword(password) {
        this.password = password;
        return this;
      }

      build() {
        return new User(this.email, this.password);
      }
    };
  }
}