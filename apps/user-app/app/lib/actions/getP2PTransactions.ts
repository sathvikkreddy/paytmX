import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function getP2PTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
    where: {
      OR: [
        { toUserId: Number(session?.user?.id) },
        { fromUserId: Number(session?.user?.id) },
      ],
    },
    orderBy: { timestamp: "desc" },
  });
  return txns.map((t) => ({
    time: t.timestamp,
    amount: t.amount,
    id: t.toUserId === Number(session?.user?.id) ? t.fromUserId : t.toUserId,
    sent: t.toUserId === Number(session?.user?.id) ? false : true,
  }));
}
