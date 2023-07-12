import axios from 'axios';

export const registerNewUser = (
  user_info: ICompleteUserInfo,
  onSucess: () => void,
  onError: (error_message?: string) => void
) => {
  return axios
    .post('users/register/', user_info)
    .then(onSucess)
    .catch(e => {
      const mesasge = e.response.data.msg;
      onError(mesasge);
    });
};
