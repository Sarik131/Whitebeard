export interface IUser {
  userId: string
  firstName: string
  lastName: string
  email: string
  password?: string | null
  classes: string[]
}

export class Credentials {
  email: string;
  password: string;
  constructor(email = '', password = '') {
    this.email = email;
    this.password = password;
  }
}