interface ButtonProps {
  children: TChildren;
  onClick?: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className='uppercase text-rosa-100 bg-transparent border-2 py-2 px-4 border-solid border-rosa-100 rounded-2xl font-default text-2xl hover:bg-rosa-100 hover:text-cinza-100 duration-300'
    >
      {' '}
      {children}{' '}
    </button>
  );
};
