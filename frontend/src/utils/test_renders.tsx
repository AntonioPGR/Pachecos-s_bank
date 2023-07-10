import { render } from '@testing-library/react';
import { Providers } from 'providers';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';

export const renderWithMemoryRouter = (
  element: React.ReactElement,
  initalentries: string[]
) => {
  return render(
    <RecoilRoot>
      <MemoryRouter initialEntries={initalentries}>{element}</MemoryRouter>
    </RecoilRoot>
  );
};

export const renderWithProviders = (element: React.ReactElement) => {
  return render(<Providers>{element}</Providers>);
};
