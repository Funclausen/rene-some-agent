import OpenAI from 'openai';

import { requireServerEnv } from '../lib/server-env';

const client = new OpenAI({
  apiKey: requireServerEnv('OPENAI_API_KEY')
});

export async function generateWithOpenAI(
  prompt: string
): Promise<string> {
  const response = await client.responses.create({
    model: 'gpt-5',
    input: prompt
  });

  return response.output_text;
}
