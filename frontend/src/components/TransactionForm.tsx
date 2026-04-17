import { useState } from 'react';
import { createTransaction } from '../services/api';

const initialState = {
  sender: '',
  receiver: '',
  amount: '',
};

export default function TransactionForm() {
  const [form, setForm] = useState(initialState);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage('');
    setError('');
    setIsLoading(true);

    try {
      const response = await createTransaction({
        sender: form.sender.trim(),
        receiver: form.receiver.trim(),
        amount: Number(form.amount),
      });

      setMessage(response.message);
      setForm(initialState);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Transaction failed.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="card form-card">
      <div className="section-title-row">
        <div>
          <p className="eyebrow">New transaction</p>
          <h3>Send value to another wallet</h3>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="form-grid">
        <label>
          <span>Sender</span>
          <input
            value={form.sender}
            onChange={(event) => setForm((prev) => ({ ...prev, sender: event.target.value }))}
            placeholder="alice"
            required
          />
        </label>

        <label>
          <span>Receiver</span>
          <input
            value={form.receiver}
            onChange={(event) => setForm((prev) => ({ ...prev, receiver: event.target.value }))}
            placeholder="bob"
            required
          />
        </label>

        <label>
          <span>Amount</span>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={form.amount}
            onChange={(event) => setForm((prev) => ({ ...prev, amount: event.target.value }))}
            placeholder="10"
            required
          />
        </label>

        <button type="submit" className="primary-button" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Create transaction'}
        </button>
      </form>

      {message ? <div className="message success">{message}</div> : null}
      {error ? <div className="message error">{error}</div> : null}
    </section>
  );
}
