import { getQueueJobs } from '../repositories/queue-repository';

export async function runQueue(
  tenantId: string,
  queueName: string
) {
  const jobs = await getQueueJobs(
    tenantId,
    queueName
  );

  for (const job of jobs.data) {
    console.log('Processing job', job.id);
  }

  return {
    processed: jobs.data.length
  };
}
