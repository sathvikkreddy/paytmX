import { Card } from "@repo/ui/card";

export const P2PTransactions = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    id: number;
    sent: boolean;
  }[];
}) => {
  if (!transactions.length) {
    return (
      <Card title="P2P Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return (
    <Card title="P2P Transactions">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">
                {`${t.sent ? "Sent" : "Received"}`} INR
              </div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center text-sm">
              {`${t.sent ? "-" : "+"}`} Rs {t.amount / 100}
              <div className="text-xs text-slate-600">{`${t.sent ? "to" : "from"} user ${t.id}`}</div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
