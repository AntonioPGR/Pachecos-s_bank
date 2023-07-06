import { Actions } from "components/actions";
import { Balance } from "components/balance";
import { Statement } from "components/statement";

export const AccountPage = () => {
  return (
    <main className='grid grid-cols-3 grid-rows-2 min-h-screen p-8 gap-4'>
      <Balance className="col-start-1 col-end-3 row-start-1 row-end-1" />
      <Actions className="col-start-1 col-end-3 row-start-2 row-end-2" />
      <Statement className="col-start-3 col-end-3 row-start-1 row-end-3" />
    </main>
  );
};
