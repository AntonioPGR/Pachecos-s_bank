import axios, { AxiosError } from 'axios';
import { SessionKey } from 'models/session_key';

export const getAPIInvesmentsValue = async () => {
  try {
    const res = await axios.get<IInvestment>('investments/', {
      headers: {
        Authorization: `Token ` + SessionKey.get(),
      },
    });
    return res.data;
  } catch (e) {
    if ((e as Error).name === 'AxiosError') {
      throw new AxiosError((e as AxiosError).message, (e as AxiosError).code);
    }
  }
};

export const addToInvestments = (value: number) => {
  return axios
    .post(
      'investments/',
      {
        value,
      },
      {
        headers: {
          Authorization: `Token ` + SessionKey.get(),
        },
      }
    )
    .then(res => {
      return res.data;
    });
};
