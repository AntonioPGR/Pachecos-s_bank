import { Card } from "./card";

interface InvestedValueProps{
    className?:string
}
export const InvestedValue = ({className}:InvestedValueProps) => {
    return (
      <Card className={className+" dark:bg-rosa-200 bg-rosa-100"}>

      </Card>
    );
};