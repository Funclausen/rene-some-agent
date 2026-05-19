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

async function generateWithOpenAI(prompt: string): Promise<string> {
  console.log('Generating with OpenAI');

  return `OPENAI_GENERATED:\n${prompt}`;
}

async function generateWithClaude(prompt: string): Promise<string> {
  console.log('Generating with Claude');

  return `CLAUDE_GENERATED:\n${prompt}`;
}
