import { getAPIInvesmentsValue } from "api/investments";
import { AxiosError } from "axios";
import { atom, useSetRecoilState } from "recoil";
export const state_investments = atom<TApiAtom<IInvestment, AxiosError>>({
  key: 'state_investments',
  default: undefined
})

export const getInvestments = () => {
  const set_investments = useSetRecoilState(state_investments) 
  return async () => {
    try {
      const investments_value = await getAPIInvesmentsValue()
      return set_investments(investments_value)
    } catch (e) {
      if (e instanceof AxiosError) {
        return set_investments(e);
      }
    }
  }
}