export type Transaction = {
  sender: string;
  receiver: string;
  amount: number;
};

export type Block = {
  index: number;
  timestamp: number;
  transactions: Transaction[];
  previous_hash: string;
  nonce: number;
  hash: string;
};

export type BlockchainResponse = {
  length: number;
  chain: Block[];
};

export type ValidationResponse = {
  is_valid: boolean;
};

export type TransactionResponse = {
  message: string;
  transaction: Transaction;
};

export type MineResponse = {
  message: string;
  block: Block;
};

export type BalanceResponse = {
  address: string;
  balance: number;
};
