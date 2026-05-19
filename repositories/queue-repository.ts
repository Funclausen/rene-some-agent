import { supabase } from '../lib/supabase';
import {
  ListRepositoryResult,
  RepositoryResult
} from '../lib/repository-types';
import { QueueJob } from '../services/queue-service';

export async function persistQueueJob(
  tenantId: string,
  job: QueueJob
): Promise<RepositoryResult<QueueJob>> {
  const result = await supabase
    .from('workflow_queue_jobs')
    .insert({
      id: job.id,
      tenant_id: tenantId,
      queue_name: job.queue,
      payload: job.payload,
      status: job.status,
      attempts: job.attempts,
      created_at: job.createdAt
    })
    .select()
    .single();

  return {
    data: result.data as QueueJob,
    error: result.error?.message ?? null
  };
}

export async function getQueueJobs(
  tenantId: string,
  queueName: string
): Promise<ListRepositoryResult<QueueJob>> {
  const result = await supabase
    .from('workflow_queue_jobs')
    .select('*')
    .eq('tenant_id', tenantId)
    .eq('queue_name', queueName)
    .order('created_at', {
      ascending: false
    });

  return {
    data: (result.data as QueueJob[]) ?? [],
    error: result.error?.message ?? null
  };
}
