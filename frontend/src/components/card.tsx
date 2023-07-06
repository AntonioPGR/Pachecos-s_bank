interface CardProps{
    className?: string,
    children: TChildren
}
export const Card = ({className, children}:CardProps) => {
    return (
      <article className={className + " rounded-2xl"}>
        {children}
      </article>
    );
};