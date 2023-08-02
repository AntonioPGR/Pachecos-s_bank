import { addToInvestments } from 'api/investments';
import { MoneyCard } from 'components/action_card';
import { InvestedValue } from 'components/invested_value';
import { SessionKey } from 'models/session_key';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getInvestments } from 'recoil/state_investments';

export const InvestmentsPage = () => {
  const [new_investment_value, setNewInvestmentValue] = useState(0);
  const [investment_input_message, setInvestmentInputMessage] = useState('');
  const update_investments = getInvestments();

  const navigate = useNavigate();
  useEffect(() => {
    if (!SessionKey.is_set()) navigate('/unauthorized');
  });

  const handleInvest = () => {
    if (new_investment_value <= 0) {
      setInvestmentInputMessage(
        'O valor investido não pode ser menor ou igual a 0!'
      );
    }
    addToInvestments(new_investment_value).then(update_investments);
  };

  return (
    <main
      data-testid='investmentsPage'
      className='page_main grid grid-cols-1 grid-rows-2 gap-4'
    >
      <InvestedValue className='row-start-1 row-end-2' />
      <MoneyCard
        input_value={new_investment_value}
        button_text='Confirmar Investimento'
        onChangeValue={setNewInvestmentValue}
        onSubmit={handleInvest}
        title='investir'
        className='row-start-2 row-end-3'
        error_message={investment_input_message}
      />
    </main>
  );
};
