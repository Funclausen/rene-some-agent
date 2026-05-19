import { generateWithFailover } from '../services/provider-failover';
import { resolveModelRoute } from '../services/model-router';
import { assemblePrompt } from '../services/prompt-assembler';
import { emitEvent } from '../services/event-bus';

interface GenerationWorkerInput {
  tenantId: string;
  brandProfileId: string;
  platform: 'facebook' | 'instagram' | 'linkedin' | 'tiktok';
  userInput: string;
  hashtagLibrary: string[];
}

export async function processGenerationJob(
  input: GenerationWorkerInput
) {
  const route = resolveModelRoute(input.platform);

  const prompt = assemblePrompt({
    tenantId: input.tenantId,
    brandProfileId: input.brandProfileId,
    platform: input.platform,
    userInput: input.userInput,
    hashtagLibrary: input.hashtagLibrary
  });

  const content = await generateWithFailover(
    prompt,
    route.provider
  );

  emitEvent({
    tenantId: input.tenantId,
    type: 'draft_generated',
    entityType: 'post',
    entityId: crypto.randomUUID(),
    metadata: {
      platform: input.platform,
      provider: route.provider,
      model: route.model
    }
  });

  return {
    content,
    provider: route.provider,
    model: route.model
  };
}
