interface MoneyInputProps {
  value: number;
  onChange(n: number): void;
}
export const MoneyInput = ({ onChange }: MoneyInputProps) => {
  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    const new_value = ev.target.value;
    const value_array = new_value.split('');
    if (isNaN(Number(value_array[value_array.length - 1]))) {
      return;
    }
    const new_value_array: string[] = [...value_array];
    if (new_value_array[0] === '0') new_value_array.shift();
    const fromIndex = new_value_array.indexOf('.'); // 👉️ 0
    const toIndex = new_value_array.length - 3;
    const element = new_value_array.splice(fromIndex, 1)[0];
    console.log(element);
    new_value_array.splice(toIndex, 0, element);
    console.log(new_value_array);
  };

  return (
    <div className='max-w-fit'>
      <span className='text-base'>R$</span>
      <input
        onChange={ev => handleInput(ev)}
        value={'00.00'}
        className='bg-transparent outline-none text-5xl border-b-4 min-w-1/2 max-w-full'
      />
    </div>
  );
};
