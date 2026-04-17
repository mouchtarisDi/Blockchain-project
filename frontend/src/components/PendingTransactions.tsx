import { useEffect, useState } from 'react';
import { getPendingTransactions } from '../services/api';
import type { Transaction } from '../types/blockchain';
import { formatAmount } from '../utils/format';

export default function PendingTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPendingTransactions() {
      try {
        const data = await getPendingTransactions();
        setTransactions(data);
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : 'Could not load pending transactions.',
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadPendingTransactions();
  }, []);

  if (isLoading) {
    return <section className="card">Loading pending transactions...</section>;
  }

  if (error) {
    return (
      <section className="card">
        <p className="eyebrow">Pending transactions</p>
        <div className="message error">
          This view needs a backend endpoint like <code>/api/pending-transactions</code>.
          <br />
          Current result: {error}
        </div>
      </section>
    );
  }

  return (
    <section className="card">
      <div className="section-title-row">
        <div>
          <p className="eyebrow">Queue</p>
          <h3>Pending transactions</h3>
        </div>
        <span className="badge">{transactions.length} pending</span>
      </div>

      {transactions.length === 0 ? (
        <p className="muted">There are no pending transactions right now.</p>
      ) : (
        <div className="transactions-list">
          {transactions.map((tx, index) => (
            <div key={`${tx.sender}-${tx.receiver}-${index}`} className="transaction-row">
              <div>
                <span className="muted small-label">From</span>
                <strong>{tx.sender}</strong>
              </div>
              <div>
                <span className="muted small-label">To</span>
                <strong>{tx.receiver}</strong>
              </div>
              <div>
                <span className="muted small-label">Amount</span>
                <strong>{formatAmount(tx.amount)}</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
