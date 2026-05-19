import { AIProvider, generateText } from './ai-provider';

const fallbackProviders: AIProvider[] = [
  'openai',
  'claude'
];

export async function generateWithFailover(
  prompt: string,
  preferredProvider: AIProvider
): Promise<string> {
  const providers: AIProvider[] = [
    preferredProvider,
    ...fallbackProviders.filter((provider) => {
      return provider !== preferredProvider;
    })
  ];

  let lastError: unknown = null;

  for (const provider of providers) {
    try {
      return await generateText({
        provider,
        prompt
      });
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError;
}
