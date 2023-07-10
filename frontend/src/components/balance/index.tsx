import { Card } from '../card';
import BalanceImage from 'images/balance_image.svg';

interface BalanceProps {
  className?: string;
}
export const Balance = ({ className }: BalanceProps) => {
  return (
    <Card
      className={
        className +
        ' flex gap-4 p-8 justify-between dark:bg-rosa-200 bg-rosa-100'
      }
    >
      <article className='flex flex-col gap-8 justify-center'>
        <h1 className='text-4xl'>Bem vindo de volta José!</h1>
        <div>
          <p className='text-lg'>Seu saldo disponível é:</p>
          <p className='text-5xl'>R$00,00</p>
        </div>
      </article>
      <div className='h-full'>
        <img
          src={BalanceImage}
          alt='homem com um binóculo em pé em cima de um globo terreste com um passaporte a direita e dinheiro em cédula a esquerda'
          className='h-full w-auto'
        />
      </div>
    </Card>
  );
};
