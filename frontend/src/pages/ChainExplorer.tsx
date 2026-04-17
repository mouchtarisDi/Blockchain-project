import { useEffect, useState } from 'react';
import BlockCard from '../components/Blockcard';
import { getChain } from '../services/api';
import type { Block } from '../types/blockchain';

export default function ChainExplorer() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadChain() {
      try {
        const response = await getChain();
        setBlocks(response.chain.slice().reverse());
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : 'Could not load chain.');
      } finally {
        setIsLoading(false);
      }
    }

    loadChain();
  }, []);

  return (
    <div className="stack-lg">
      <section className="hero-card compact-hero">
        <div>
          <p className="eyebrow">Chain Explorer</p>
          <h2>Inspect every block of the blockchain</h2>
        </div>
      </section>

      {error ? <div className="message error">{error}</div> : null}
      {isLoading ? <section className="card">Loading chain...</section> : null}

      <div className="blocks-grid">
        {blocks.map((block) => (
          <BlockCard key={block.hash} block={block} />
        ))}
      </div>
    </div>
  );
}
