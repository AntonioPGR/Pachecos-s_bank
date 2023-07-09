import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithMemoryRouter = (
  element: React.ReactElement,
  initalentries: string[]
) => {
  return render(
    <MemoryRouter initialEntries={initalentries}>{element}</MemoryRouter>
  );
};
