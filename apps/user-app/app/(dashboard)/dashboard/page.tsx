import { Card } from "@repo/ui/card";
import { authOptions } from "../../lib/auth";
import { getServerSession } from "next-auth";
import { getBalance } from "../../lib/actions/getBalance";

export default async function () {
  const session = await getServerSession(authOptions);
  const balance = await getBalance();
  return (
    <div className="m-2 p-2">
      <Card title="User Details">
        <div className="pt-2">
          <div>Id: {session?.user?.id}</div>
          <div>Name: {session?.user?.name || "NA"}</div>
          <div>Balance: {balance.amount / 100}</div>
        </div>
      </Card>
    </div>
  );
}
