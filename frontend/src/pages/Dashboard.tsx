import { useEffect, useState } from 'react';
import BlockCard from '../components/Blockcard';
import { getChain, getLatestBlock, validateChain } from '../services/api';
import type { Block } from '../types/blockchain';

export default function Dashboard() {
  const [latestBlock, setLatestBlock] = useState<Block | null>(null);
  const [chainLength, setChainLength] = useState<number>(0);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [latest, chain, validation] = await Promise.all([
          getLatestBlock(),
          getChain(),
          validateChain(),
        ]);

        setLatestBlock(latest);
        setChainLength(chain.length);
        setIsValid(validation.is_valid);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : 'Could not load dashboard.');
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboard();
  }, []);

  return (
    <div className="stack-lg">
      <section className="hero-card">
        <div>
          <p className="eyebrow">Blockchain overview</p>
          <h2>Clean dashboard for your educational blockchain project</h2>
          <p className="hero-text">
            See the latest block, chain status, mining validity and the most important
            blockchain information in one place.
          </p>
        </div>
      </section>

      {error ? <div className="message error">{error}</div> : null}

      <section className="stats-grid">
        <article className="card stat-card">
          <span className="muted">Chain length</span>
          <strong>{isLoading ? '...' : chainLength}</strong>
        </article>
        <article className="card stat-card">
          <span className="muted">Validation</span>
          <strong>{isLoading ? '...' : isValid ? 'Valid' : 'Invalid'}</strong>
        </article>
        <article className="card stat-card">
          <span className="muted">Latest block</span>
          <strong>{isLoading ? '...' : latestBlock?.index ?? '-'}</strong>
        </article>
      </section>

      {isLoading ? <section className="card">Loading dashboard...</section> : null}
      {!isLoading && latestBlock ? <BlockCard block={latestBlock} /> : null}
    </div>
  );
}
