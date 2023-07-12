export class FormValidator{
  static isEmailValid(email:string):boolean{
    if(!email) return false
    
    if (!email.includes('@')) {
      return false
    }
    return true
  }

  static isPasswordValid(password: string): boolean{
    if(!password) return false

    if(password.length < 8 || password.search(/[a-z]/) < 0 || password.search(/[A-Z]/) < 0  || password.search(/\d/) < 0) {
      return false
    }
    return true
  }

  static isNameValid(name: string): boolean{
    if(!name) return false
    name.trim()
    name.replace(' ', '')
    return /^[a-zA-Z]+$/.test(name)
  }

  static isBirthDateValid(date: string): boolean{
    if(!date) return false

    const birth_date = new Date(date)
    const atual_date = new Date()

    const diff_in_ms = (atual_date.valueOf() - birth_date.valueOf())
    const diff_in_years = Math.floor(diff_in_ms / 31536000000)

    if (diff_in_years < 18) {
      return false
    }
    return true
  }
}