import { Link } from 'react-router-dom';
import { Button } from './button';

interface IFormProps {
  inputs: IInputInfo[];
  onSubmit(): void;
  title: string;
  button_label: string;
  message_link?: ILink;
}
export const Form = ({
  inputs,
  onSubmit,
  title,
  button_label,
  message_link,
}: IFormProps) => {
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    onSubmit();
  };

  return (
    <section className='p-4 border-solid border-rosa-100 border-x-2 max-w-2xl w-full'>
      <h1 className='font-highlight text-rosa-100 text-5xl'> {title} </h1>
      <form onSubmit={ev => handleSubmit(ev)}>
        <section className='my-12 flex flex-col gap-4'>
          {inputs.map(inputInfo => {
            return (
              <div key={inputInfo.id}>
                <label
                  htmlFor={inputInfo.label}
                  className='font-default text-rosa-100 dark:text-cinza-100 lowercase'
                >
                  {inputInfo.label}
                </label>
                <input
                  type={inputInfo.type}
                  value={inputInfo.value}
                  onChange={value => inputInfo.onChange(value.target.value)}
                  placeholder={inputInfo.placeholder}
                  name={inputInfo.label}
                  className='block w-full px-4 py-2 rounded-2xl text-cinza-100 dark:text-cinza-900 bg-rosa-100 dark:bg-cinza-100 outline-none'
                />
              </div>
            );
          })}
        </section>
        {message_link && (
          <p className='mb-12 text-center underline text-rosa-100 font-default text-sm'>
            <Link to={message_link.to}>{message_link.label}</Link>
          </p>
        )}
        <Button>{button_label}</Button>
      </form>
    </section>
  );
};
