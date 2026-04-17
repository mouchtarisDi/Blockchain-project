import { useState } from 'react';
import { mineBlock } from '../services/api';
import type { Block } from '../types/blockchain';
import BlockCard from './Blockcard';

export default function MinePanel() {
  const [minerAddress, setMinerAddress] = useState('miner-01');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [block, setBlock] = useState<Block | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleMine(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    setError('');
    setIsLoading(true);

    try {
      const response = await mineBlock(minerAddress.trim());
      setMessage(response.message);
      setBlock(response.block);
    } catch (mineError) {
      setError(mineError instanceof Error ? mineError.message : 'Mining failed.');
      setBlock(null);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="stack-lg">
      <section className="card form-card">
        <p className="eyebrow">Mining</p>
        <h3>Create a new block from pending transactions</h3>

        <form onSubmit={handleMine} className="form-grid">
          <label>
            <span>Miner address</span>
            <input
              value={minerAddress}
              onChange={(event) => setMinerAddress(event.target.value)}
              placeholder="miner-01"
              required
            />
          </label>

          <button type="submit" className="primary-button" disabled={isLoading}>
            {isLoading ? 'Mining...' : 'Mine block'}
          </button>
        </form>

        {message ? <div className="message success">{message}</div> : null}
        {error ? <div className="message error">{error}</div> : null}
      </section>

      {block ? <BlockCard block={block} /> : null}
    </div>
  );
}
