import { getHashtags } from '../lib/hashtags';
import { platformRules } from '../lib/platform-rules';
import { reneVoiceProfile } from '../lib/voice-profile';
import { IdeaInput, Platform } from '../lib/types';

interface BuildPromptInput {
  idea: IdeaInput;
  platform: Platform;
  hashtagCategoryIds: string[];
}

export function buildPrompt(input: BuildPromptInput): string {
  const rule = platformRules[input.platform];
  const hashtags = getHashtags(input.hashtagCategoryIds);

  return `
You are generating a social media draft for Rene Schneider.

VOICE PROFILE:
${reneVoiceProfile}

PLATFORM:
${rule.platform}

PLATFORM RULES:
- Description: ${rule.description}
- Preferred length: ${rule.preferredLength}
- Hashtag strategy: ${rule.hashtagStrategy}
- Call to action style: ${rule.callToActionStyle}

APPROVED HASHTAG LIBRARY:
${hashtags.join(' ')}

USER IDEA:
Headline: ${input.idea.headline}
Raw idea: ${input.idea.rawIdea}
Key message: ${input.idea.keyMessage ?? 'Not provided'}
Target audience: ${input.idea.targetAudience ?? 'Not provided'}
Desired tone: ${input.idea.desiredTone ?? 'Not provided'}

TASK:
Generate one complete draft for this platform.
Use only relevant hashtags from the approved library.
Do not explain your answer.
Return only the final draft text.
`;
}
