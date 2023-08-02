import { getAPIStatements } from "api/statement";
import { AxiosError } from "axios";
import { atom, useSetRecoilState } from "recoil";

export const state_statements = atom<TApiAtom<IStatement[], AxiosError>>({
  key: 'state_statements',
  default: undefined
})

export const getStatements = () => {
  const set_statements = useSetRecoilState(state_statements)
  return async () => {
    try {
      const res = await getAPIStatements()
      set_statements(res)
    } catch (e) {
      if (e instanceof AxiosError) {
        set_statements(e)
      }
    }
  }
}