import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { InvestmentsPage } from '.';
import '@testing-library/jest-dom';

describe('Test page authorization', () => {
  it.todo('The page is display if the user is logged in');
  it.todo('The page is not display if the user is not logged in');
});

describe('Test investments display', () => {
  it.todo('is load when page load');
  it.todo('is updated after a investment request');
});

describe('Test invest actions', () => {
  const typeAndSubmitInput = (value: string) => {
    const input = screen.getByTestId('investir_input');
    userEvent.type(input, value);
    const button = screen.getByTestId('investir_button');
    userEvent.click(button);
  };

  it.todo(
    'Is made a request to register the investment after submit with correct value'
  );

  it('throws and error message if the form is submitted with 0', async () => {
    render(<InvestmentsPage />);
    typeAndSubmitInput('0');

    const error_message = await screen.findByTestId('investir_error_message');
    expect(error_message).toBeInTheDocument();
  });

  it('throws and error message if the form is submitted with a value less than 0', async () => {
    render(<InvestmentsPage />);
    typeAndSubmitInput('-1');

    const error_message = await screen.findByTestId('investir_error_message');
    expect(error_message).toBeInTheDocument();
  });
});

export {};
