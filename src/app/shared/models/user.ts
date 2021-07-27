export class User {
  id: number | null
  firstName: string
  lastName: string
  email: string
  password: string
  accessToken: string | null
  _tokenExpirationDate: Date
  constructor({
    firstName = '',
    lastName = '',
    email = '',
    password = '',
    ...rest
  }) {
    Object.assign(this, rest)
    this.id = rest.id ? rest.id : null
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.accessToken = rest.accessToken ? rest.accessToken : null
    //not sure if I should add _tokenExpirationDate
  }
  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this.accessToken;
  }
}
