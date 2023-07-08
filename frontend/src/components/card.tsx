interface CardProps {
  className?: string;
  children: TChildren;
}
export const Card = ({ className, children }: CardProps) => {
  return (
    <section className={className + ' rounded-2xl p-4'}>{children}</section>
  );
};
