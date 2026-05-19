import { Platform } from './types';

export type RewriteIntent =
  | 'make_more_personal'
  | 'make_shorter'
  | 'make_more_local'
  | 'make_more_conservative'
  | 'make_less_aggressive'
  | 'make_more_storytelling'
  | 'remove_ai_language'
  | 'optimize_cta'
  | 'platform_optimize';

export interface RewriteRequest {
  tenantId: string;
  brandProfileId: string;
  platform: Platform;
  originalContent: string;
  intent: RewriteIntent;
  extraInstruction?: string;
}

export interface RewriteResult {
  content: string;
  intent: RewriteIntent;
  createdAt: string;
}
