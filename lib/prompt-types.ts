import { Platform } from './types';

export type PromptTemplateType =
  | 'system'
  | 'voice'
  | 'platform'
  | 'rewrite'
  | 'safety'
  | 'hashtag'
  | 'cta';

export interface PromptTemplate {
  id: string;
  tenantId?: string;
  brandProfileId?: string;
  type: PromptTemplateType;
  platform?: Platform;
  name: string;
  content: string;
  version: number;
  active: boolean;
}

export interface PromptAssemblyInput {
  tenantId: string;
  brandProfileId: string;
  platform: Platform;
  userInput: string;
  keyMessage?: string;
  targetAudience?: string;
  hashtagLibrary: string[];
}
