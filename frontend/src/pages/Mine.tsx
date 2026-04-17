import MinePanel from '../components/MinePanel';

export default function Mine() {
  return (
    <div className="stack-lg">
      <section className="hero-card compact-hero">
        <div>
          <p className="eyebrow">Mining</p>
          <h2>Mine all pending transactions into a new block</h2>
          <p className="hero-text">
            Use a miner address to receive the reward and generate the next block of the
            chain.
          </p>
        </div>
      </section>

      <MinePanel />
    </div>
  );
}
