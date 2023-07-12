import { StrictMode } from 'react';
import { ReactRouterProvider } from './react_router';
import { RecoilProvider } from './recoil';
import { ReactQueryProvider } from './react_query';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post = {
  'Content-Type': 'application/json',
};

export const Providers = ({ children }: IProvider) => {
  return (
    <StrictMode>
      <ReactRouterProvider>
        <RecoilProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </RecoilProvider>
      </ReactRouterProvider>
    </StrictMode>
  );
};
