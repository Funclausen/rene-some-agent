import { PromptAssemblyInput } from '../lib/prompt-types';
import { platformRules } from '../lib/platform-rules';
import { reneVoiceProfile } from '../lib/voice-profile';

export function assemblePrompt(
  input: PromptAssemblyInput
): string {
  const platformRule = platformRules[input.platform];

  return `
SYSTEM ROLE:
You are a senior political communications strategist.

VOICE PROFILE:
${reneVoiceProfile}

PLATFORM PROFILE:
${platformRule.description}

HASHTAG LIBRARY:
${input.hashtagLibrary.join(' ')}

USER INPUT:
${input.userInput}

KEY MESSAGE:
${input.keyMessage ?? 'Not provided'}

TARGET AUDIENCE:
${input.targetAudience ?? 'Not provided'}

RULES:
- Avoid generic AI language
- Avoid corporate language
- Sound human
- Sound local
- Be concrete
- Use emotional realism
- Only use relevant hashtags
- Follow platform behavior

TASK:
Generate one optimized platform-specific post.
Return only the final post.
`;
}
