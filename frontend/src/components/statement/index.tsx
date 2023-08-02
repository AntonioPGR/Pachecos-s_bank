import { AxiosError } from 'axios';
import { Card } from '../card';
import {
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/solid';
import { brl_formatter } from 'models/money_formatter';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { getStatements, state_statements } from 'recoil/state_statement';

interface StatementProps {
  className?: string;
}
export const Statement = ({ className }: StatementProps) => {
  const statements_list = useRecoilValue(state_statements);
  const loadStatements = getStatements();

  useEffect(() => {
    loadStatements();
  }, []);

  const renderStatements = () => {
    if (!statements_list) {
      return <p>loading</p>;
    }
    if (statements_list instanceof AxiosError) {
      return <p>error</p>;
    }
    return statements_list.map(value => {
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
            )}
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
