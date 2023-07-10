import { useState } from 'react';

interface MoneyInputProps {
  value: number;
  onChange(n: number): void;
  data_testid: string;
}
export const MoneyInput = ({
  value,
  onChange,
  data_testid,
}: MoneyInputProps) => {
  const formatNumber = (value: number) => {
    const splited_value = turnValueStringIntoArray(String(value));
    const formated_value = formatStringArray(splited_value);
    return turnValueArrayintoString(formated_value);
  };

  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();
    const new_value = ev.target.value;
    if (!isNewValueValid(new_value)) {
      return;
    }
    const splited_value = turnValueStringIntoArray(new_value);
    const formated_value = formatStringArray(splited_value);
    const string_value = turnValueArrayintoString(formated_value);
    setInputValue(string_value);
    onChange(Number(string_value));
  };

  const isNewValueValid = (value: string) => {
    return !isNaN(Number(value));
  };

  const turnValueStringIntoArray = (value: string) => {
    const splited_value = value.split('');
    return removeValueDot(splited_value);
  };

  const removeValueDot = (value: string[]) => {
    const dot_index = value.indexOf('.');
    if (dot_index === -1) return value;
    value.splice(dot_index, 1);
    return value;
  };

  const formatStringArray = (value: string[]) => {
    while (value[0] === '0' && value.length > 4) {
      value.shift();
    }
    while (value.length < 4) {
      value.unshift('0');
    }
    return addValueDot(value);
  };

  const addValueDot = (value: string[]) => {
    const dot_index = value.length - 2;
    value.splice(dot_index, 0, '.');
    return value;
  };

  const turnValueArrayintoString = (value_array: string[]) => {
    return value_array.join('');
  };

  const [input_value, setInputValue] = useState(formatNumber(value));

  return (
    <div className='max-w-fit flex justify-center items-end '>
      <span className='text-base'>R$</span>
      <input
        data-testid={data_testid}
        onChange={ev => handleInput(ev)}
        value={input_value}
        className='bg-transparent outline-none text-5xl border-b-4 w-3/4 text-center'
      />
    </div>
  );
};
