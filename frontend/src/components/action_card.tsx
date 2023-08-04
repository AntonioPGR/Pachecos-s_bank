import { Button } from './button';
import { Card } from './card';

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
  onChangeValue,
  input_value,
  onSubmit,
  error_message,
}: ActionCardProps) => {
  return (
    <Card
      className={
        className +
        ' bg-azul-900 flex flex-col items-center justify-around min-h-[304px]'
      }
    >
      <h2 className='text-2xl sm:text-4xl'> {title} </h2>
      <div className='max-w-fit flex justify-center items-end '>
        <span className='text-base'>R$</span>
        <input
          type='number'
          onChange={ev => onChangeValue(Number(ev.target.value))}
          value={input_value}
          className='bg-transparent outline-none text-5xl border-b-4 w-1/2 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
        />
      </div>
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
