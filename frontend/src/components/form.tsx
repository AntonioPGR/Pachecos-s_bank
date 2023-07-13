import { Link } from 'react-router-dom';
import { Button } from './button';

interface IFormProps {
  inputs: IInputInfo[];
  onSubmit(): void;
  title: string;
  button_label: string;
  message_link?: ILink;
  error_message?: string;
  success_message?: string;
}
export const Form = ({
  inputs,
  onSubmit,
  title,
  button_label,
  message_link,
  error_message,
  success_message,
}: IFormProps) => {
  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    onSubmit();
  };

  return (
    <section className='p-4 border-solid border-rosa-100 border-x-2 max-w-2xl w-full'>
      <h1 className='font-highlight text-rosa-100 text-5xl'> {title} </h1>
      <form onSubmit={ev => handleSubmit(ev)}>
        <section className='my-8 flex flex-col gap-4'>
          {success_message && (
            <p className='text-green-700 text-md p-2 bg-green-100 rounded-md'>
              {' '}
              {success_message}{' '}
            </p>
          )}
          {error_message && (
            <p className='text-red-700 p-2 bg-red-100 rounded-md text-md'>
              {error_message}
            </p>
          )}
          {inputs.map(inputInfo => {
            return (
              <div key={inputInfo.id}>
                <label
                  htmlFor={inputInfo.label}
                  className='font-default text-rosa-100 lowercase'
                >
                  {inputInfo.label}
                </label>
                <input
                  required
                  data-testid={inputInfo.label + '_input'}
                  autoComplete='on'
                  type={inputInfo.type}
                  value={inputInfo.value}
                  onChange={value => inputInfo.onChange(value.target.value)}
                  placeholder={inputInfo.placeholder}
                  name={inputInfo.label}
                  className='block w-full px-4 py-2 rounded-2xl text-cinza-100 dark:text-cinza-900 bg-rosa-100 dark:bg-cinza-100 outline-none'
                />
                {inputInfo.error_message && (
                  <p
                    className='text-red-700 mt-1 text-sm'
                    data-testid='form_error_message'
                  >
                    {inputInfo.error_message}
                  </p>
                )}
              </div>
            );
          })}
        </section>
        {message_link && (
          <p className='page_redirect_link'>
            <Link to={message_link.to}>{message_link.label}</Link>
          </p>
        )}
        <Button data_testid='form_button'>{button_label}</Button>
      </form>
    </section>
  );
};
