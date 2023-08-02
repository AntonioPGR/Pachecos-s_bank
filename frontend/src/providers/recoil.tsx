import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

export const RecoilProvider = ({ children }: IProvider) => {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>loading</div>}>{children}</Suspense>
    </RecoilRoot>
  );
};
