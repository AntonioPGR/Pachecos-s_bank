export class SessionKey{

  static get() {
    return sessionStorage.getItem('session_key')
  }

  static set(new_key:string) {
    sessionStorage.setItem('session_key', new_key)
  }

  static delete() {
    return sessionStorage.removeItem('session_key')
  }

  static is_set() {
    return !sessionStorage.getItem('session_key')? false : true
  }
}