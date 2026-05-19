import { WorkflowEvent, WorkflowEventType } from '../lib/event-types';

const eventStore: WorkflowEvent[] = [];

interface EmitEventInput {
  tenantId: string;
  type: WorkflowEventType;
  entityType: WorkflowEvent['entityType'];
  entityId: string;
  actorId?: string;
  metadata?: Record<string, unknown>;
}

export function emitEvent(
  input: EmitEventInput
): WorkflowEvent {
  const event: WorkflowEvent = {
    id: crypto.randomUUID(),
    tenantId: input.tenantId,
    type: input.type,
    entityType: input.entityType,
    entityId: input.entityId,
    actorId: input.actorId,
    metadata: input.metadata,
    createdAt: new Date().toISOString()
  };

  eventStore.push(event);

  console.log('Workflow event emitted', event);

  return event;
}

export function getEventsByTenant(
  tenantId: string
): WorkflowEvent[] {
  return eventStore.filter((event) => {
    return event.tenantId === tenantId;
  });
}
