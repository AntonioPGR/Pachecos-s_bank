import { registerNewUser } from 'api/register';
import { Form } from 'components/form';
import { FormValidator } from 'models/form_validator';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [email_message, setEmailMessage] = useState('');
  const [password, setPassword] = useState('');
  const [password_message, setPasswordMessage] = useState('');
  const [name, setName] = useState('');
  const [name_message, setNameMessage] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [birth_date_message, setBirthDateMessage] = useState('');

  const [form_error, setFormError] = useState<undefined | string>('');
  const navigate = useNavigate();

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
      label: 'nome',
      onChange(name) {
        setName(name);
      },
      value: name,
      type: 'text',
      placeholder: 'nome de exemplo',
      error_message: name_message,
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
      error_message: password_message,
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
      error_message: birth_date_message,
    },
  ];

  const clearInputMessages = () => {
    setEmailMessage('');
    setPasswordMessage('');
    setNameMessage('');
    setBirthDateMessage('');
  };

  const isInputsValid = () => {
    if (
      !FormValidator.isEmailValid(email) ||
      !FormValidator.isPasswordValid(password)
    ) {
      return false;
    }
    return true;
  };

  const displayInputsMessages = () => {
    if (!FormValidator.isEmailValid(email)) {
      setEmailMessage('Insira um email valido!');
    }
    if (!FormValidator.isPasswordValid(password)) {
      setPasswordMessage(
        'A senha é invalida! certifique-se que ela contem numeros, letras maiúsculas e minúsculas'
      );
    }
    if (!FormValidator.isNameValid(name)) {
      setNameMessage(
        'O nome é invalido! Lembre-se que são permitidos apenas letras nesse campo!'
      );
    }
    if (!FormValidator.isBirthDateValid(birth_date)) {
      setBirthDateMessage(
        'A data de nascimento é invalida! apenas maiores de idade são permitidos'
      );
    }
  };

  const cleanForm = () => {
    setName('');
    setPassword('');
    setEmail('');
    setBirthDate('');
  };

  const onSubmit = () => {
    clearInputMessages();
    if (!isInputsValid()) {
      displayInputsMessages();
      cleanForm();
      return;
    }
    cleanForm();
    registerNewUser(
      {
        birth_date,
        email,
        name,
        password,
      },
      () => navigate(`/login?email=${email}&redirect_reason=user_created`),
      e => setFormError(e)
    );
  };

  return (
    <main
      data-testid='registerPage'
      className='page_main flex items-center justify-center'
    >
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
        error_message={form_error}
      />
    </main>
  );
};
