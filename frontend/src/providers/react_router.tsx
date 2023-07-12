import { BrowserRouter } from 'react-router-dom';

export const ReactRouterProvider = ({ children }: IProvider) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
