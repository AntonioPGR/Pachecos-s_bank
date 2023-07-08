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
}
export const ActionCard = ({
  className,
  title,
  button_text,
  input_value,
  onChangeValue,
  onSubmit,
}: ActionCardProps) => {
  return (
    <Card
      className={
        className + ' bg-azul-900 flex flex-col items-center justify-around'
      }
    >
      <h2 className='text-4xl'> {title} </h2>
      <MoneyInput onChange={onChangeValue} value={input_value} />
      <Button onClick={onSubmit}> {button_text} </Button>
    </Card>
  );
};
