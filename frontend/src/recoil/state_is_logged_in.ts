import { SessionKey } from "models/session_key";
import { atom } from "recoil";

export const state_is_logged_in = atom<boolean>({
  key: 'state_is_logged_in',
  default: SessionKey.is_set()
})