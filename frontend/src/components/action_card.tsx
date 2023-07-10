import { Button } from './button';
import { Card } from './card';
import { MoneyInput } from './money_input';

interface ActionCardProps {
  className?: string;
  title: string;
  button_text: string;
  input_value: number;
  onChangeValue(n: number): void;
  onSubmit: () => void;
  error_message?: string;
}
export const MoneyCard = ({
  className,
  title,
  button_text,
  input_value,
  onChangeValue,
  onSubmit,
  error_message,
}: ActionCardProps) => {
  return (
    <Card
      className={
        className + ' bg-azul-900 flex flex-col items-center justify-around'
      }
    >
      <h2 className='text-4xl'> {title} </h2>
      <MoneyInput
        data_testid={title + '_input'}
        onChange={onChangeValue}
        value={input_value}
      />
      {error_message && (
        <p className='text-center' data-testid={`${title}_error_message`}>
          {error_message}
        </p>
      )}
      <Button data_testid={title + '_button'} onClick={onSubmit}>
        {button_text}
      </Button>
    </Card>
  );
};
