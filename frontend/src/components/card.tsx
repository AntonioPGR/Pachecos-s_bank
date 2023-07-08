interface CardProps {
  className?: string;
  children: TChildren;
}
export const Card = ({ className, children }: CardProps) => {
  return <section className={className + ' page_card'}>{children}</section>;
};
