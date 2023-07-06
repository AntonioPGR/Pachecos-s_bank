import { Invest } from "components/invest";
import { InvestedValue } from "components/invested_value";

export const InvestmentsPage = () => {
  return (
    <main className='grid grid-cols-1 grid-rows-2 min-h-screen p-8 gap-4'>
      <InvestedValue className="row-start-1 row-end-2" />
      <Invest className="row-start-2 row-end-3" />
    </main>
  );
};
