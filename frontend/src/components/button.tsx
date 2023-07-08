interface ButtonProps {
  children: TChildren;
  onClick?: () => void;
}
export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button onClick={onClick} className='page_button'>
      {' '}
      {children}{' '}
    </button>
  );
};
