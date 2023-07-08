import { Card } from './card';
import InvestmentsImage from 'images/investments_image.svg';

interface InvestedValueProps {
  className?: string;
}
export const InvestedValue = ({ className }: InvestedValueProps) => {
  return (
    <Card
      className={
        className +
        ' flex gap-4 p-8 justify-between dark:bg-rosa-200 bg-rosa-100'
      }
    >
      <article className='flex flex-col justify-center gap-8'>
        <h1 className='text-4xl'>Olá josé</h1>
        <section className='flex gap-8'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>Seu valor total investido é:</p>
            <p className='text-5xl'>R$00,00</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-xl'>Seu valor liquido atual é:</p>
            <p className='text-5xl'>R$00,00</p>
          </div>
        </section>
      </article>
      <div>
        <img
          src={InvestmentsImage}
          alt='A man sitting in a bar chart with investments icons and references in the backgroud'
        />
      </div>
    </Card>
  );
};
