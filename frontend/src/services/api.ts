import axios from 'axios';
import type {
  BalanceResponse,
  Block,
  BlockchainResponse,
  MineResponse,
  Transaction,
  TransactionResponse,
  ValidationResponse,
} from '../types/blockchain';

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    return error.response?.data?.detail ?? error.message;
  }

  return 'Something went wrong.';
}

export async function getChain(): Promise<BlockchainResponse> {
  const response = await api.get<BlockchainResponse>('/api/chain');
  return response.data;
}

export async function getLatestBlock(): Promise<Block> {
  const response = await api.get<Block>('/api/latest-block');
  return response.data;
}

export async function validateChain(): Promise<ValidationResponse> {
  const response = await api.get<ValidationResponse>('/api/validate');
  return response.data;
}

export async function createTransaction(payload: {
  sender: string;
  receiver: string;
  amount: number;
}): Promise<TransactionResponse> {
  try {
    const response = await api.post<TransactionResponse>('/api/transactions', payload);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function mineBlock(minerAddress: string): Promise<MineResponse> {
  try {
    const response = await api.post<MineResponse>('/api/mine', {
      miner_address: minerAddress,
    });
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function getBalance(address: string): Promise<BalanceResponse> {
  try {
    const response = await api.get<BalanceResponse>(`/api/balance/${encodeURIComponent(address)}`);
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}

export async function getPendingTransactions(): Promise<Transaction[]> {
  try {
    const response = await api.get<Transaction[]>('/api/pending-transactions');
    return response.data;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
}
