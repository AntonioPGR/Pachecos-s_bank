import { ActionCard } from 'components/action_card';
import { InvestedValue } from 'components/invested_value';
import { useState } from 'react';

export const InvestmentsPage = () => {
  const [investment_value, setInvestmentValue] = useState(0);

  const handleInvest = () => {
    return;
  };

  return (
    <main className='page_main grid grid-cols-1 grid-rows-2 gap-4'>
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
