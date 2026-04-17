import type { BalanceResponse } from '../types/blockchain';
import { formatAmount } from '../utils/format';

export default function BalanceCard({ data }: { data: BalanceResponse }) {
  return (
    <section className="card balance-card">
      <p className="eyebrow">Address balance</p>
      <h3>{formatAmount(data.balance)}</h3>
      <p className="muted wallet-address">{data.address}</p>
    </section>
  );
}
