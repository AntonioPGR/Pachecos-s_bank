import { Card } from './card';
import InvestmentsImage from 'images/investments_image.svg';
import { brl_formatter } from 'models/money_formatter';
import { useRecoilValue } from 'recoil';
import { getInvestments, state_investments } from 'recoil/state_investments';
import { useEffect } from 'react';
import { AxiosError } from 'axios';

interface InvestedValueProps {
  className?: string;
}
export const InvestedValue = ({ className }: InvestedValueProps) => {
  const investedValue = useRecoilValue(state_investments);
  const loadInvestments = getInvestments();

  useEffect(() => {
    loadInvestments();
  }, []);

  const renderValue = (which_value: 'current' | 'invested') => {
    if (!investedValue) {
      return <p className='text-5xl'>loading</p>;
    }
    if (investedValue instanceof AxiosError) {
      return <p className='text-5xl'>Não foi possivel carregar o saldo</p>;
    }
    return (
      <p className='text-5xl'>
        {which_value === 'current'
          ? brl_formatter.format(investedValue.current_value)
          : brl_formatter.format(investedValue.invested_value)}
      </p>
    );
  };

  return (
    <Card
      className={
        className +
        ' flex gap-4 p-8 justify-between items-center dark:bg-rosa-200 bg-rosa-100'
      }
    >
      <article className='flex flex-col items-center max-lg:w-full justify-center gap-8'>
        <h1 className='text-4xl w-full'>Olá josé!</h1>
        <section className='flex flex-col items-center md:flex-row gap-8'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>Seu valor total investido é:</p>
            {renderValue('invested')}
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>Seu valor liquido atual é:</p>
            {renderValue('current')}
          </div>
        </section>
      </article>
      <div className='hidden lg:block'>
        <img
          src={InvestmentsImage}
          alt='A man sitting in a bar chart with investments icons and references in the backgroud'
        />
      </div>
    </Card>
  );
};
