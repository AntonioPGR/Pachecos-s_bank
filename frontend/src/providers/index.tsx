import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

interface PropsProvider {
  children: TChildren;
}
export const Providers = ({ children }: PropsProvider) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <RecoilRoot>{children}</RecoilRoot>
      </BrowserRouter>
    </StrictMode>
  );
};
