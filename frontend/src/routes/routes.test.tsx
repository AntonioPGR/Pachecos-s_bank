import { screen } from '@testing-library/react';
import { AppRouter } from 'routes';
import { mock_matchMedia } from 'utils/mock_matchMedia';
import { renderWithMemoryRouter } from 'utils/test_renders';
import '@testing-library/jest-dom/extend-expect';

describe('Test the app routes', () => {
  const renderRoutes = (path: string) => {
    return renderWithMemoryRouter(<AppRouter />, [path]);
  };

  beforeEach(() => {
    mock_matchMedia();
  });

  it('Home page should be displayed in "/" route', () => {
    renderRoutes('/');
    const element = screen.getByTestId('homePage');
    expect(element).toBeInTheDocument();
  });

  it('Login page should be displayed in "/login" route', () => {
    renderRoutes('/login');
    const element = screen.getByTestId('loginPage');
    expect(element).toBeInTheDocument();
  });

  it('Register page should be displayed in "/cadrasto" route', () => {
    renderRoutes('/cadastro');
    const element = screen.getByTestId('registerPage');
    expect(element).toBeInTheDocument();
  });

  it('Account page should be displayed in "/conta" route', () => {
    renderRoutes('/conta');
    const element = screen.getByTestId('accountPage');
    expect(element).toBeInTheDocument();
  });

  it('Investments page should be displayed in "/investimentos" route', () => {
    renderRoutes('/investimentos');
    const element = screen.getByTestId('investmentsPage');
    expect(element).toBeInTheDocument();
  });

  it('Not found page should be displayed at unexistent route', () => {
    renderRoutes('/unexistentroute');
    const element = screen.getByTestId('notFoundPage');
    expect(element).toBeInTheDocument();
  });
});
