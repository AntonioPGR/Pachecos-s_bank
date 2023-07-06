import { Card } from "./card";

interface StatementProps{
    className?:string
}
export const Statement = ({className}:StatementProps) => {
    return (
      <Card className={className+" dark:bg-cinza-900 bg-gray-500"}>

      </Card>
    );
};