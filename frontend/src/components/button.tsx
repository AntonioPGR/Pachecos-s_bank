interface ButtonProps {
  children: TChildren;
  onClick?: () => void;
  data_testid?: string;
}
export const Button = ({ children, onClick, data_testid }: ButtonProps) => {
  return (
    <button data-testid={data_testid} onClick={onClick} className='page_button'>
      {' '}
      {children}{' '}
    </button>
  );
};
