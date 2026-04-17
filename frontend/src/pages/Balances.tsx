import { useState } from 'react';
import BalanceCard from '../components/BalanceCard';
import { getBalance } from '../services/api';
import type { BalanceResponse } from '../types/blockchain';

export default function Balances() {
  const [address, setAddress] = useState('alice');
  const [balanceData, setBalanceData] = useState<BalanceResponse | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const data = await getBalance(address.trim());
      setBalanceData(data);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Could not fetch balance.');
      setBalanceData(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="stack-lg">
      <section className="hero-card compact-hero">
        <div>
          <p className="eyebrow">Balances</p>
          <h2>Check the confirmed balance of any wallet address</h2>
        </div>
      </section>

      <section className="card form-card">
        <form onSubmit={handleSubmit} className="form-grid two-columns">
          <label>
            <span>Wallet address</span>
            <input
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder="alice"
              required
            />
          </label>

          <button type="submit" className="primary-button" disabled={isLoading}>
            {isLoading ? 'Checking...' : 'Get balance'}
          </button>
        </form>

        {error ? <div className="message error">{error}</div> : null}
      </section>

      {balanceData ? <BalanceCard data={balanceData} /> : null}
    </div>
  );
}
