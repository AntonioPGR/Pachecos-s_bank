import { Card } from "./card";

interface BalanceProps{
    className?:string
}
export const Balance = ({className}:BalanceProps) => {
    return (
      <Card className={className+" dark:bg-rosa-200 bg-rosa-100"}>

      </Card>
    );
};