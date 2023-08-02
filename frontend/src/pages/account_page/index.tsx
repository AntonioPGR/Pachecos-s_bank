// COMPONENTS
import { makeAStatement } from 'api/statement';
import { MoneyCard } from 'components/action_card';
import { Balance } from 'components/balance';
import { Statement } from 'components/statement';
import { SessionKey } from 'models/session_key';
// REACT
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AccountPage = () => {
  const [deposit_value, setDepositValue] = useState(0);
  const [deposit_message, setDepositMessage] = useState('');
  const handleDeposit = () => {
    if (deposit_value <= 0) {
      setDepositMessage(
        'O valor desejado de depósito é invalido! Insira um valor maior que 0'
      );
    }
    makeAStatement(deposit_value);
  };
  const [withdraw_value, setWithdrawValue] = useState(0);
  const [withdraw_message, setWithdrawMessage] = useState('');
  const handleWithdraw = () => {
    if (withdraw_value <= 0) {
      setWithdrawMessage(
        'O valor desejado de saque é invalido! Insira um valor maior que 0'
      );
    }
    makeAStatement(-withdraw_value);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (!SessionKey.is_set()) navigate('/unauthorized');
  });

  return (
    <main
      data-testid='accountPage'
      className='page_main grid grid-cols-3 grid-rows-2 gap-4'
    >
      <Balance className='col-start-1 col-end-3 row-start-1 row-end-1' />
      <MoneyCard
        title='depositar'
        button_text='confirmar deposito'
        className='col-start-1 col-end-2 row-start-2 row-end-2'
        input_value={deposit_value}
        onChangeValue={setDepositValue}
        onSubmit={handleDeposit}
        error_message={deposit_message}
      />
      <MoneyCard
        title='sacar'
        button_text='confirmar saque'
        className='col-start-2 col-end-3 row-start-2 row-end-2'
        input_value={withdraw_value}
        onChangeValue={setWithdrawValue}
        onSubmit={handleWithdraw}
        error_message={withdraw_message}
      />
      <Statement className='col-start-3 col-end-3 row-start-1 row-end-3' />
    </main>
  );
};
