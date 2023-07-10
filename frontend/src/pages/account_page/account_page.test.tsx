import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AccountPage } from '.';
import '@testing-library/jest-dom';

describe('Test page authorization', () => {
  it.todo('The page is display if the user is logged in');
  it.todo('The page is not display if the user is not logged in');
});

describe('Test withdraw actions', () => {
  const typeAndSubmitInput = (value: string) => {
    const input = screen.getByTestId('sacar_input');
    userEvent.type(input, value);
    const button = screen.getByTestId('sacar_button');
    userEvent.click(button);
  };

  it.todo(
    'Is made a request to register the withdraw when balance is sufficient'
  );

  it('throws and error message if the form is submitted with 0', async () => {
    render(<AccountPage />);
    typeAndSubmitInput('0');

    const error_message = await screen.findByTestId('sacar_error_message');
    expect(error_message).toBeInTheDocument();
  });

  it('throws and error message if the form is submitted with a value less than 0', async () => {
    render(<AccountPage />);
    typeAndSubmitInput('-1');

    const error_message = await screen.findByTestId('sacar_error_message');
    expect(error_message).toBeInTheDocument();
  });
});

describe('Test deposit', () => {
  const typeAndSubmitInput = (value: string) => {
    const input = screen.getByTestId('depositar_input');
    userEvent.type(input, value);
    const button = screen.getByTestId('depositar_button');
    userEvent.click(button);
  };

  it.todo('Is made a request to register the deposit');

  it('throws and error message if the form is submitted with 0', async () => {
    render(<AccountPage />);
    typeAndSubmitInput('0');

    const error_message = await screen.findByTestId('depositar_error_message');
    expect(error_message).toBeInTheDocument();
  });

  it('throws and error message if the form is submitted with a value less than 0', async () => {
    render(<AccountPage />);
    typeAndSubmitInput('-1');

    const error_message = await screen.findByTestId('depositar_error_message');
    expect(error_message).toBeInTheDocument();
  });
});

export {};
