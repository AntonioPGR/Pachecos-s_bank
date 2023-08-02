import axios, { AxiosError } from 'axios';
import { SessionKey } from 'models/session_key';

export const getAPIStatements = async () => {
  try {
    const res = await axios.get<IStatement[]>('statements/', {
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

export const makeAStatement = (statment: IStatement) => {
  return axios
    .post(
      'statements/',
      {
        value: statment.value,
        description: statment.description,
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
