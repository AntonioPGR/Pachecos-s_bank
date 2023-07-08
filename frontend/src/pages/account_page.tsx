// COMPONENTS
import { ActionCard } from 'components/action_card';
import { Balance } from 'components/balance';
import { Statement } from 'components/statement';
import { useState } from 'react';

export const AccountPage = () => {
  const [deposit_value, setDepositValue] = useState(0);
  const [statement_value, setWithdrawValue] = useState(0);

  const handleDeposit = () => {};

  const handleWithdraw = () => {};

  return (
    <main className='grid grid-cols-3 grid-rows-2 min-h-screen p-8 gap-4 max-w-screen-xl m-auto font-default text-cinza-100'>
      <Balance className='col-start-1 col-end-3 row-start-1 row-end-1' />
      <ActionCard
        title='Depositar'
        button_text='confirmar deposito'
        className='col-start-1 col-end-2 row-start-2 row-end-2'
        input_value={deposit_value}
        onChangeValue={setDepositValue}
        onSubmit={handleDeposit}
      />
      <ActionCard
        title='Sacar'
        button_text='confirmar saque'
        className='col-start-2 col-end-3 row-start-2 row-end-2'
        input_value={statement_value}
        onChangeValue={setWithdrawValue}
        onSubmit={handleWithdraw}
      />
      <Statement className='col-start-3 col-end-3 row-start-1 row-end-3' />
    </main>
  );
};
