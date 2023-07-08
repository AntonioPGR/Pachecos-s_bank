import { Form } from 'components/form';
import { useState } from 'react';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [birth_date, setBirthDate] = useState('');

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
      label: 'nome',
      onChange(name) {
        setName(name);
      },
      value: name,
      type: 'text',
      placeholder: 'nome de exemplo',
    },
    {
      id: 3,
      label: 'senha',
      onChange(password) {
        setPassword(password);
      },
      value: password,
      type: 'password',
      placeholder: '********',
    },
    {
      id: 4,
      label: 'data de nascimento',
      onChange(date) {
        setBirthDate(date);
      },
      value: birth_date,
      type: 'date',
      placeholder: 'dd/mm/yyyy',
    },
  ];

  const onSubmit = () => {
    console.log(email);
    console.log(password);
  };

  return (
    <main className='page_main flex items-center justify-center'>
      <Form
        title='cadastro'
        button_label='Cadastrar'
        inputs={inputs}
        onSubmit={onSubmit}
        message_link={{
          id: 1,
          label: 'Já possui conta? entre aqui!',
          to: '/login',
        }}
      />
    </main>
  );
};
