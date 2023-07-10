export class FormValidator{
  static isEmailValid(email:string):boolean{
    if (!email.includes('@')) {
      return false
    }
    return true
  }

  static isPasswordValid(password:string):boolean{
    if(password.length < 8 || password.search(/[a-z]/) < 0 || password.search(/[A-Z]/) < 0  || password.search(/\d/) < 0) {
      return false
    }
    return true
  }
}