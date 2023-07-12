import { RecoilRoot } from 'recoil';

export const RecoilProvider = ({ children }: IProvider) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
