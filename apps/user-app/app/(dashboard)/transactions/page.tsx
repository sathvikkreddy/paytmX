import { P2PTransactions } from "../../../components/P2PTransactions";
import { Center } from "@repo/ui/center";
import { OnRampTransactions } from "../../../components/OnRampTransactions";
import { getP2PTransactions } from "../../lib/actions/getP2PTransactions";
import { getOnRampTransactions } from "../../lib/actions/getOnRampTransactions";

export default async function () {
  const p2Ptransactions = await getP2PTransactions();
  const onRampTransactions = await getOnRampTransactions();
  return (
    <Center>
      <div className="w-full flex gap-3 p-4">
        <P2PTransactions transactions={p2Ptransactions} />
        <OnRampTransactions transactions={onRampTransactions} />
      </div>
    </Center>
  );
}
