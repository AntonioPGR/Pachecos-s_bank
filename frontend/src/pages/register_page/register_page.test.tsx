// import '@testing-library/jest-dom';
// import { act, render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { renderWithProviders } from 'utils/test_renders';
// import { RegisterPage } from '.';
// import { registerNewUser } from 'api/register';
// import { resolve } from 'path';
// import { BrowserRouter } from 'react-router-dom';

// jest.mock('api/register');

// const mock_register = {
//   token: '123asd',
// };

// const mock_requisicao = (retorno: any) => {
//   return Promise.resolve({
//     data: retorno,
//   });
// };

describe('Test Register form actions with correct submit', () => {
  it.todo('should call the api to register a new client');

  it.todo('Should be redirected to account page');
  it.todo('Should add session token to cookies');
});

describe('Test login form actions with incorrect submit', () => {
  it.todo('should display errors on incorrect inputs');

  it.todo('should clean inputs with errors after submit');

  it.todo('Error message should be displayed');
});

export {};
