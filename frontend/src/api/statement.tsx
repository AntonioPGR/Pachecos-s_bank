import axios from 'axios';
import { SessionKey } from 'models/session_key';

export const getStatements = () => {
  return axios
    .get<IStatement[]>('statements/', {
      headers: {
        Authorization: `Token ` + SessionKey.get(),
      },
    })
    .then(res => {
      return res.data;
    });
};
