export type QueueType =
  | 'generation'
  | 'rewrite'
  | 'approval'
  | 'publishing'
  | 'analytics';

export interface QueueJob {
  id: string;
  queue: QueueType;
  payload: Record<string, unknown>;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  attempts: number;
  createdAt: string;
}

const queueStore: QueueJob[] = [];

export function enqueueJob(
  queue: QueueType,
  payload: Record<string, unknown>
): QueueJob {
  const job: QueueJob = {
    id: crypto.randomUUID(),
    queue,
    payload,
    status: 'pending',
    attempts: 0,
    createdAt: new Date().toISOString()
  };

  queueStore.push(job);

  return job;
}

export function getQueueJobs(
  queue: QueueType
): QueueJob[] {
  return queueStore.filter((job) => {
    return job.queue === queue;
  });
}
