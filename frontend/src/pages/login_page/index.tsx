import { Form } from 'components/form';
import { FormValidator } from 'models/form_validator';
import { useState } from 'react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [email_message, setEmailMessage] = useState('');
  const [password, setPassword] = useState('');
  const [password_message, setPasswordMessage] = useState('');

  const inputs: IInputInfo[] = [
    {
      id: 1,
      label: 'email',
      onChange(email) {
        setEmail(email);
      },
      value: email,
      type: 'email',
      placeholder: 'email@exemplo.com',
      error_message: email_message,
    },
    {
      id: 2,
      label: 'senha',
      onChange(password) {
        setPassword(password);
      },
      value: password,
      type: 'password',
      placeholder: '********',
      error_message: password_message,
    },
  ];

  const isInputsValid = () => {
    if (
      !FormValidator.isEmailValid(email) ||
      !FormValidator.isPasswordValid(password)
    ) {
      return false;
    }
    return true;
  };

  const displayInputsMessagesAndClear = () => {
    if (!FormValidator.isEmailValid(email)) {
      setEmailMessage(
        'O email é invalido, verifique o campo e corrija os dados!'
      );
      setEmail('');
    }
    if (!FormValidator.isPasswordValid(password)) {
      setPasswordMessage(
        'A senha é invalida! certifique-se que ela contem numeros, letras maiúsculas e minúsculas'
      );
      setPassword('');
    }
  };

  const onSubmit = () => {
    if (!isInputsValid()) {
      displayInputsMessagesAndClear();
    }
  };

  return (
    <main
      data-testid='loginPage'
      className='page_main flex items-center justify-center'
    >
      <Form
        title='Login'
        button_label='entrar'
        inputs={inputs}
        onSubmit={onSubmit}
        message_link={{
          id: 1,
          label: 'Ainda não possui conta? registre-se aqui!',
          to: '/cadastro',
        }}
      />
    </main>
  );
};
