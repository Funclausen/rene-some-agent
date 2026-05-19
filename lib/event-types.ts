export type WorkflowEventType =
  | 'idea_created'
  | 'assets_uploaded'
  | 'draft_generated'
  | 'draft_rewritten'
  | 'changes_requested'
  | 'post_approved'
  | 'publishing_job_created'
  | 'post_scheduled'
  | 'post_published'
  | 'post_failed';

export interface WorkflowEvent {
  id: string;
  tenantId: string;
  type: WorkflowEventType;
  entityType: 'idea' | 'post' | 'version' | 'asset' | 'publishing_job';
  entityId: string;
  actorId?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
}
