export interface RetryPolicy {
  maxAttempts: number;
  baseDelayMs: number;
  maxDelayMs: number;
}

export const defaultRetryPolicy: RetryPolicy = {
  maxAttempts: 3,
  baseDelayMs: 1000,
  maxDelayMs: 30000
};

export function calculateRetryDelay(
  attempts: number,
  policy: RetryPolicy = defaultRetryPolicy
): number {
  const exponentialDelay = policy.baseDelayMs * 2 ** Math.max(0, attempts - 1);

  return Math.min(exponentialDelay, policy.maxDelayMs);
}

export function canRetry(
  attempts: number,
  policy: RetryPolicy = defaultRetryPolicy
): boolean {
  return attempts < policy.maxAttempts;
}
