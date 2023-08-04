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
    setNewInvestmentValue(0);
  };

  return (
    <main
      data-testid='investmentsPage'
      className='page_main flex flex-col gap-4 h-full'
    >
      <InvestedValue className='h-full' />
      <MoneyCard
        input_value={new_investment_value}
        button_text='Confirmar Investimento'
        onChangeValue={setNewInvestmentValue}
        onSubmit={handleInvest}
        title='investir'
        className='h-full'
        error_message={investment_input_message}
      />
    </main>
  );
};
