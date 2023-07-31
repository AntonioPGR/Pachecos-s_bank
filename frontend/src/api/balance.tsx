import axios from 'axios';
import { SessionKey } from 'models/session_key';

export const getCurrentBalance = () => {
  return axios
    .get<{ balance: number }>('accounts/', {
      headers: {
        Authorization: `Token ` + SessionKey.get(),
      },
    })
    .then(res => {
      return res.data.balance;
    });
};
