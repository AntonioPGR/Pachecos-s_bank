import { useQuery } from '@tanstack/react-query';
import { Card } from '../card';
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/solid';
import { getStatements } from 'api/statement';
import { useEffect } from 'react';
import { brl_formatter } from 'models/money_formatter';

interface StatementProps {
  className?: string;
}
export const Statement = ({ className }: StatementProps) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['getStatements'],
    queryFn: getStatements,
    retry: 2,
  });

  const renderStatements = () => {
    if (isLoading) {
      return <p>loading</p>;
    }
    if (isError) {
      return <p>error</p>;
    }
    return data.map(value => {
      return (
        <li key={value.id}>
          <div
            className={
              'flex items-center gap-2 ' +
              (value.value > 0 ? 'text-green-500' : 'text-red-500')
            }
          >
            {value.value > 0 ? (
              <ArrowTrendingUpIcon className='w-8 ' />
            ) : (
              <ArrowTrendingDownIcon className='w-8 ' />
            )}{' '}
            <span className='text-xl'>{brl_formatter.format(value.value)}</span>
          </div>
          {value.description && (
            <p className='text-base'>{value.description}</p>
          )}
        </li>
      );
    });
  };

  return (
    <Card className={className + ' dark:bg-cinza-900 bg-gray-500'}>
      <h2 className='text-3xl mb-4'>Extrato</h2>
      <ul className='flex flex-col gap-2'>{renderStatements()} </ul>
    </Card>
  );
};
