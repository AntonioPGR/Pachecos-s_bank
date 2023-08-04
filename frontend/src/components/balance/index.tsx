import { Card } from 'components/card';
import BalanceImage from 'images/balance_image.svg';
import { brl_formatter } from 'models/money_formatter';
import { useRecoilValue } from 'recoil';
import { getBalance, state_balance } from 'recoil/state_balance';
import { useEffect } from 'react';
import { AxiosError } from 'axios';

interface BalanceProps {
  className?: string;
}
export const Balance = ({ className }: BalanceProps) => {
  const balance = useRecoilValue(state_balance);
  const loadBalance = getBalance();

  useEffect(() => {
    loadBalance();
  }, []);

  const renderBalance = () => {
    if (!balance) {
      return <p className='text-5xl'> loading</p>;
    }
    if (balance instanceof AxiosError) {
      return <p className='text-5xl'> an error ocurred</p>;
    }
    return (
      <p className='text-3xl sm:text-5xl'>
        {' '}
        {brl_formatter.format(balance.balance)}{' '}
      </p>
    );
  };

  return (
    <Card
      className={
        className +
        ' flex gap-4 p-8 justify-between dark:bg-rosa-200 bg-rosa-100'
      }
    >
      <article className='flex flex-col gap-8 justify-center w-full'>
        <h1 className='text-2xl sm:text-4xl'>Bem vindo de volta José!</h1>
        <div>
          <p className='text-md sm:text-lg'>Seu saldo disponível é:</p>
          {renderBalance()}
        </div>
      </article>
      <div className='hidden xl:block h-full'>
        <img
          src={BalanceImage}
          alt='homem com um binóculo em pé em cima de um globo terreste com um passaporte a direita e dinheiro em cédula a esquerda'
          className='h-full w-auto'
        />
      </div>
    </Card>
  );
};
