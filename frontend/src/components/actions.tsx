import { Card } from "./card";

interface ActionsProps{
    className?: string
}
export const Actions = ({className}:ActionsProps) => {
    return (
      <Card className={className+" bg-azul-900"}>

      </Card>
    );
};