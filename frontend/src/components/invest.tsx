import { Card } from "./card";

interface InvestProps{
    className?:string
}
export const Invest = ({className}:InvestProps) => {
    return (
      <Card className={className+" bg-azul-900"}>

      </Card>
    );
};