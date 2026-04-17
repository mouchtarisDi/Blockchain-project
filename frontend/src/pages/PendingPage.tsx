import PendingTransactions from '../components/PendingTransactions';

export default function PendingPage() {
  return (
    <div className="stack-lg">
      <section className="hero-card compact-hero">
        <div>
          <p className="eyebrow">Pending queue</p>
          <h2>See transactions waiting to be mined</h2>
          <p className="hero-text">
            This page is ready on the frontend. It will work fully when the backend exposes
            the pending transactions endpoint.
          </p>
        </div>
      </section>

      <PendingTransactions />
    </div>
  );
}
