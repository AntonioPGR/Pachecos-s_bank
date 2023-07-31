import { SessionKey } from 'models/session_key';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSetterAsLoggedOut } from 'recoil/state_is_logged_in';

export const LogoutPage = () => {
  const navigate = useNavigate();
  const setAsLoggedOut = getSetterAsLoggedOut();

  useEffect(() => {
    setAsLoggedOut();
    SessionKey.delete();
    navigate('/login');
  }, []);

  return <></>;
};
