import { MoneyCard } from 'components/action_card';
import { InvestedValue } from 'components/invested_value';
import { useState } from 'react';

export const InvestmentsPage = () => {
  const [investment_value, setInvestmentValue] = useState(0);
  const [investment_message, setInvestmentMessage] = useState('');

  const handleInvest = () => {
    if (investment_value <= 0) {
      setInvestmentMessage(
        'O valor investido não pode ser menor ou igual a 0!'
      );
    }
  };

  return (
    <main
      data-testid='investmentsPage'
      className='page_main grid grid-cols-1 grid-rows-2 gap-4'
    >
      <InvestedValue className='row-start-1 row-end-2' />
      <MoneyCard
        input_value={investment_value}
        button_text='Confirmar Investimento'
        onChangeValue={setInvestmentValue}
        onSubmit={handleInvest}
        title='investir'
        className='row-start-2 row-end-3'
        error_message={investment_message}
      />
    </main>
  );
};
