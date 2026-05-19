import { Platform } from './types';

export interface PlatformRule {
  platform: Platform;
  description: string;
  preferredLength: string;
  hashtagStrategy: string;
  callToActionStyle: string;
}

export const platformRules: Record<Platform, PlatformRule> = {
  facebook: {
    platform: 'facebook',
    description: 'Personlig, lokal og fortaellende.',
    preferredLength: 'medium to long',
    hashtagStrategy: 'few relevant hashtags',
    callToActionStyle: 'community oriented'
  },
  instagram: {
    platform: 'instagram',
    description: 'Kortere, visuelt og emotionelt.',
    preferredLength: 'short to medium',
    hashtagStrategy: 'more hashtags allowed',
    callToActionStyle: 'engagement focused'
  },
  linkedin: {
    platform: 'linkedin',
    description: 'Reflekterende, samfundsorienteret og professionel.',
    preferredLength: 'medium',
    hashtagStrategy: 'minimal hashtags',
    callToActionStyle: 'reflection and dialogue'
  },
  tiktok: {
    platform: 'tiktok',
    description: 'Hook, manus og sceneinstruktioner.',
    preferredLength: 'short spoken format',
    hashtagStrategy: 'trend and discovery focused',
    callToActionStyle: 'strong hook and viewer interaction'
  }
};
