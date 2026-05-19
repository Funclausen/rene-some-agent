import { runQueue } from './queue-runner';

export async function runGenerationQueue() {
  return runQueue('tenant-1', 'generation');
}
