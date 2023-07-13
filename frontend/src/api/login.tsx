import axios from 'axios';
import { SessionKey } from 'models/session_key';

export const loginNewUser = (
  user_info: IUserInfo,
  onSucess: () => void,
  onError: (error_message?: string) => void
) => {
  return axios
    .post<{ token: string }>('users/login/', user_info)
    .then(data => {
      SessionKey.set(data.data.token);
      onSucess();
    })
    .catch(e => {
      const mesasge = e.response.data.msg;
      onError(mesasge);
    });
};
