import { ActionCard } from 'components/action_card';
import { InvestedValue } from 'components/invested_value';
import { useState } from 'react';

export const InvestmentsPage = () => {
  const [investment_value, setInvestmentValue] = useState(0);

  const handleInvest = () => {};

  return (
    <main className='grid grid-cols-1 grid-rows-2 min-h-screen p-8 gap-4 max-w-screen-xl m-auto font-default text-cinza-100'>
      <InvestedValue className='row-start-1 row-end-2' />
      <ActionCard
        input_value={investment_value}
        button_text='Confirmar Investimento'
        onChangeValue={setInvestmentValue}
        onSubmit={handleInvest}
        title='Investir'
        className='row-start-2 row-end-3'
      />
    </main>
  );
};
