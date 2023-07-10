import { Card } from '../card';
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/solid';

interface StatementProps {
  className?: string;
}
export const Statement = ({ className }: StatementProps) => {
  return (
    <Card className={className + ' dark:bg-cinza-900 bg-gray-500'}>
      <h2 className='text-3xl mb-4'>Extrato</h2>
      <ul className='flex flex-col gap-2'>
        <li>
          <div className='flex items-center gap-2 text-red-500'>
            <ArrowTrendingDownIcon className='w-8 ' />
            <span className='text-xl'>R$00,00</span>
          </div>
          <p className='text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            natus delectus
          </p>
        </li>
        <li>
          <div className='flex items-center gap-2 text-green-500'>
            <ArrowTrendingUpIcon className='w-8 ' />
            <span className='text-xl'>R$00,00</span>
          </div>
          <p className='text-base'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            natus delectus
          </p>
        </li>
      </ul>
    </Card>
  );
};
