import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { HomePage } from 'pages/home_page';

const mock_navigate = jest.fn();
jest.mock('react-router-dom', () => {
  return {
    useNavigate: () => mock_navigate,
  };
});

describe('Test landing page button actions', () => {
  it('is displayed in the document', () => {
    render(<HomePage />);
    const button = screen.getByTestId('goToRegisterButton');
    expect(button).toBeInTheDocument();
  });

  it('Redirect to register page after click', () => {
    render(<HomePage />);
    const button = screen.getByTestId('goToRegisterButton');
    fireEvent.click(button);
    expect(mock_navigate).toHaveBeenCalledTimes(1);
    expect(mock_navigate).toHaveBeenCalledWith('/cadastro');
  });
});
