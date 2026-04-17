export function formatTimestamp(timestamp: number): string {
  if (!timestamp) {
    return '-';
  }

  return new Date(timestamp * 1000).toLocaleString();
}

export function shortHash(value: string, keep = 10): string {
  if (!value) {
    return '-';
  }

  if (value.length <= keep * 2) {
    return value;
  }

  return `${value.slice(0, keep)}...${value.slice(-keep)}`;
}

export function formatAmount(value: number): string {
  return Number(value).toFixed(2);
}
