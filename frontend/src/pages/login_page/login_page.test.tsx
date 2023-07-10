import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginPage } from '.';
import { renderWithProviders } from 'utils/test_renders';

const submitForm = () => {
  const button = screen.getByTestId('form_button');
  userEvent.click(button);
};

const getLoginInputs = () => {
  const password_input = screen.getByTestId('senha_input') as HTMLInputElement;
  const email_input = screen.getByTestId('email_input') as HTMLInputElement;
  return {
    password_input,
    email_input,
  };
};

describe('Test login form actions after registration', () => {
  it.todo('Should be redirected to account page');
  it.todo('Should add session token to cookies');
});

describe('Test login form actions with incorrect submit', () => {
  const incorrectFillInputs = () => {
    const inputs = getLoginInputs();
    userEvent.type(inputs.email_input, 'emailsemarroba.com.br');
    userEvent.type(inputs.password_input, ' ');
  };

  it('should display errors on incorrect inputs', async () => {
    renderWithProviders(<LoginPage />);
    incorrectFillInputs();
    submitForm();
    const message = await screen.findAllByTestId('form_error_message');
    expect(message).toHaveLength(2);
  });

  it('should clean inputs with errors after submit', async () => {
    renderWithProviders(<LoginPage />);
    incorrectFillInputs();
    submitForm();
    const inputs = getLoginInputs();
    expect(inputs.email_input.value).toBe('');
    expect(inputs.password_input.value).toBe('');
  });

  it.todo('Error message should be displayed');
});
