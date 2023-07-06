import { Form } from 'components/form';
import { useState } from 'react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    },
  ];

  const onSubmit = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <main className='flex items-center justify-center min-h-screen p-4'>
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
