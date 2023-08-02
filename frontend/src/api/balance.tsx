import axios, { AxiosError } from 'axios';
import { SessionKey } from 'models/session_key';

export const getAPIBalance = async () => {
  try {
    const res = await axios.get<IBalance>('accounts/', {
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
