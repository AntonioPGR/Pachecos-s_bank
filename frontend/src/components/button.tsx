interface ButtonProps {
  children: TChildren;
  onClick?: () => void;
  testId?: string;
}
export const Button = ({ children, onClick, testId }: ButtonProps) => {
  return (
    <button data-testid={testId} onClick={onClick} className='page_button'>
      {' '}
      {children}{' '}
    </button>
  );
};
