import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from 'utils/test_renders';
import { RegisterPage } from '.';

const submitForm = () => {
  const button = screen.getByTestId('form_button');
  userEvent.click(button);
};

const getRegisterInputs = () => {
  const password_input = screen.getByTestId('senha_input') as HTMLInputElement;
  const email_input = screen.getByTestId('email_input') as HTMLInputElement;
  const name_input = screen.getByTestId('nome_input') as HTMLInputElement;
  const birth_date_input = screen.getByTestId(
    'data de nascimento_input'
  ) as HTMLInputElement;
  return {
    password_input,
    email_input,
    name_input,
    birth_date_input,
  };
};

describe('Test Register form actions after registration', () => {
  it.todo('Should be redirected to account page');
  it.todo('Should add session token to cookies');
});

describe('Test login form actions with incorrect submit', () => {
  const incorrectFillInputs = () => {
    const inputs = getRegisterInputs();
    userEvent.type(inputs.email_input, 'emailsemarroba.com.br');
    userEvent.type(inputs.name_input, '123@asda');
    userEvent.type(inputs.birth_date_input, '2022-01-05');
    userEvent.type(inputs.password_input, ' ');
  };

  it('should display errors on incorrect inputs', async () => {
    renderWithProviders(<RegisterPage />);
    incorrectFillInputs();
    submitForm();
    const message = await screen.findAllByTestId('form_error_message');
    expect(message).toHaveLength(4);
  });

  it('should clean inputs with errors after submit', async () => {
    renderWithProviders(<RegisterPage />);
    incorrectFillInputs();
    submitForm();
    const inputs = getRegisterInputs();
    expect(inputs.email_input.value).toBe('');
    expect(inputs.password_input.value).toBe('');
    expect(inputs.birth_date_input.value).toBe('');
    expect(inputs.name_input.value).toBe('');
  });

  it.todo('Error message should be displayed');
});
