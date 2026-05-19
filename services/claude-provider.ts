import Anthropic from '@anthropic-ai/sdk';

import { requireServerEnv } from '../lib/server-env';

const client = new Anthropic({
  apiKey: requireServerEnv('ANTHROPIC_API_KEY')
});

export async function generateWithClaude(
  prompt: string
): Promise<string> {
  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1200,
    messages: [
      {
        role: 'user',
        content: prompt
      }
    ]
  });

  return response.content
    .map((item) => {
      if (item.type === 'text') {
        return item.text;
      }

      return '';
    })
    .join('\n');
}
