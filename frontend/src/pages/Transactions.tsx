import TransactionForm from '../components/TransactionForm';

export default function Transactions() {
  return (
    <div className="stack-lg">
      <section className="hero-card compact-hero">
        <div>
          <p className="eyebrow">Transactions</p>
          <h2>Create a blockchain transaction</h2>
          <p className="hero-text">
            Add a sender, a receiver and an amount. The request goes directly to your
            FastAPI backend.
          </p>
        </div>
      </section>

      <TransactionForm />
    </div>
  );
}
