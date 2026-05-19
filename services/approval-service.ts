import { PostStatus } from '../lib/types';

export interface ApprovalDecision {
  postId: string;
  versionId: string;
  approvedBy: string;
  comment?: string;
}

export interface ApprovalResult {
  postId: string;
  versionId: string;
  status: PostStatus;
  approvedAt: string;
}

export function approvePost(input: ApprovalDecision): ApprovalResult {
  return {
    postId: input.postId,
    versionId: input.versionId,
    status: 'approved',
    approvedAt: new Date().toISOString()
  };
}

export function requestChanges(input: ApprovalDecision): ApprovalResult {
  return {
    postId: input.postId,
    versionId: input.versionId,
    status: 'in_review',
    approvedAt: new Date().toISOString()
  };
}
