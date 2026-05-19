import { supabase } from '../lib/supabase';
import { WorkflowEvent } from '../lib/event-types';
import {
  ListRepositoryResult,
  RepositoryResult
} from '../lib/repository-types';

export async function persistWorkflowEvent(
  event: WorkflowEvent
): Promise<RepositoryResult<WorkflowEvent>> {
  const result = await supabase
    .from('workflow_events')
    .insert({
      id: event.id,
      tenant_id: event.tenantId,
      type: event.type,
      entity_type: event.entityType,
      entity_id: event.entityId,
      actor_id: event.actorId,
      metadata: event.metadata,
      created_at: event.createdAt
    })
    .select()
    .single();

  return {
    data: result.data as WorkflowEvent,
    error: result.error?.message ?? null
  };
}

export async function getWorkflowEventsByTenant(
  tenantId: string
): Promise<ListRepositoryResult<WorkflowEvent>> {
  const result = await supabase
    .from('workflow_events')
    .select('*')
    .eq('tenant_id', tenantId)
    .order('created_at', {
      ascending: false
    });

  return {
    data: (result.data as WorkflowEvent[]) ?? [],
    error: result.error?.message ?? null
  };
}
