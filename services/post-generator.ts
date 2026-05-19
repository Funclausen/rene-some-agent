import { generateText } from './ai-provider';
import { buildPrompt } from './prompt-builder';
import { GeneratedPost, IdeaInput, Platform } from '../lib/types';

interface GeneratePostsInput {
  idea: IdeaInput;
  hashtagCategoryIds: string[];
  provider: 'openai' | 'claude';
}

const platforms: Platform[] = [
  'facebook',
  'instagram',
  'linkedin',
  'tiktok'
];

export async function generatePlatformPosts(
  input: GeneratePostsInput
): Promise<GeneratedPost[]> {
  const results: GeneratedPost[] = [];

  for (const platform of platforms) {
    const prompt = buildPrompt({
      idea: input.idea,
      platform,
      hashtagCategoryIds: input.hashtagCategoryIds
    });

    const content = await generateText({
      provider: input.provider,
      prompt
    });

    results.push({
      platform,
      content,
      hashtags: []
    });
  }

  return results;
}
