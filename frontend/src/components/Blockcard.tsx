import type { Block } from '../types/blockchain';
import { formatAmount, formatTimestamp, shortHash } from '../utils/format';

export default function BlockCard({ block }: { block: Block }) {
  return (
    <article className="card block-card">
      <div className="card-header-row">
        <div>
          <p className="eyebrow">Block</p>
          <h3>#{block.index}</h3>
        </div>
        <span className="badge">{block.transactions.length} tx</span>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <span>Timestamp</span>
          <strong>{formatTimestamp(block.timestamp)}</strong>
        </div>
        <div className="detail-item">
          <span>Nonce</span>
          <strong>{block.nonce}</strong>
        </div>
        <div className="detail-item detail-item-full">
          <span>Hash</span>
          <strong title={block.hash}>{shortHash(block.hash, 14)}</strong>
        </div>
        <div className="detail-item detail-item-full">
          <span>Previous hash</span>
          <strong title={block.previous_hash}>{shortHash(block.previous_hash, 14)}</strong>
        </div>
      </div>

      <div className="transactions-list">
        <div className="section-title-row">
          <h4>Transactions</h4>
        </div>

        {block.transactions.length === 0 ? (
          <p className="muted">No transactions in this block.</p>
        ) : (
          block.transactions.map((tx, index) => (
            <div key={`${block.hash}-${index}`} className="transaction-row">
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
          ))
        )}
      </div>
    </article>
  );
}
