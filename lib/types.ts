export type Platform = 'facebook' | 'instagram' | 'linkedin' | 'tiktok';

export type PostStatus =
  | 'draft'
  | 'generated'
  | 'in_review'
  | 'approved'
  | 'scheduled'
  | 'published'
  | 'failed';

export interface IdeaInput {
  headline: string;
  rawIdea: string;
  keyMessage?: string;
  targetAudience?: string;
  desiredTone?: string;
}

export interface GeneratedPost {
  platform: Platform;
  content: string;
  hashtags: string[];
  callToAction?: string;
}
