import { generateWithClaude } from './claude-provider';
import { generateWithOpenAI } from './openai-provider';

export type AIProvider = 'openai' | 'claude';

export interface GenerateTextInput {
  provider: AIProvider;
  prompt: string;
}

export async function generateText(input: GenerateTextInput): Promise<string> {
  switch (input.provider) {
    case 'openai':
      return generateWithOpenAI(input.prompt);

    case 'claude':
      return generateWithClaude(input.prompt);

    default:
      throw new Error('Unsupported AI provider');
  }
}
