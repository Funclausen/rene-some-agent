import { emitEvent } from './event-bus';

interface DraftGeneratedPayload {
  tenantId: string;
  postId: string;
  actorId?: string;
  platform: string;
}

export function handleDraftGenerated(
  payload: DraftGeneratedPayload
) {
  return emitEvent({
    tenantId: payload.tenantId,
    type: 'draft_generated',
    entityType: 'post',
    entityId: payload.postId,
    actorId: payload.actorId,
    metadata: {
      platform: payload.platform
    }
  });
}

interface PostApprovedPayload {
  tenantId: string;
  postId: string;
  actorId?: string;
}

export function handlePostApproved(
  payload: PostApprovedPayload
) {
  return emitEvent({
    tenantId: payload.tenantId,
    type: 'post_approved',
    entityType: 'post',
    entityId: payload.postId,
    actorId: payload.actorId
  });
}
