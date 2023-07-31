import { SessionKey } from "models/session_key";
import { atom, useSetRecoilState } from "recoil";

export const state_is_logged_in = atom<boolean>({
  key: 'state_is_logged_in',
  default: SessionKey.is_set()
})

export const getSetterAsLoggedIn = () => {
  const setState = useSetRecoilState(state_is_logged_in)
  return () => {
    setState(true)
  }
}

export const getSetterAsLoggedOut = () => {
  const setState = useSetRecoilState(state_is_logged_in)
  return () => {
    setState(false)
  }
}