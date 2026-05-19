import { Platform } from '../lib/types';

export type AIModelRoute = {
  provider: 'openai' | 'claude';
  model: string;
};

const routes: Record<Platform, AIModelRoute> = {
  facebook: {
    provider: 'claude',
    model: 'claude-sonnet-4'
  },
  instagram: {
    provider: 'openai',
    model: 'gpt-5'
  },
  linkedin: {
    provider: 'openai',
    model: 'gpt-5'
  },
  tiktok: {
    provider: 'openai',
    model: 'gpt-5'
  }
};

export function resolveModelRoute(
  platform: Platform
): AIModelRoute {
  return routes[platform];
}
