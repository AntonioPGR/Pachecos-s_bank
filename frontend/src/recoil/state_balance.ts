import { getAPIBalance } from "api/balance";
import { AxiosError } from "axios";
import { atom, useSetRecoilState } from "recoil";

export const state_balance = atom<TApiAtom<IBalance, AxiosError>>({
  key: 'state_balance',
  default: undefined
})

export const getBalance = () => {
  const set_balance = useSetRecoilState(state_balance) 
  return async () => {
    try {
      const balance_value = await getAPIBalance()
      return set_balance(balance_value)
    } catch (e) {
      if (e instanceof AxiosError) {
        return set_balance(e);
      }
    }
  }
}