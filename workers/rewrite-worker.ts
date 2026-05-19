import { buildRewriteInstruction } from '../services/rewrite-engine';
import { generateWithFailover } from '../services/provider-failover';
import { emitEvent } from '../services/event-bus';
import { RewriteRequest } from '../lib/rewrite-types';

export async function processRewriteJob(
  request: RewriteRequest
) {
  const instruction = buildRewriteInstruction(request);

  const rewrittenContent = await generateWithFailover(
    instruction,
    'claude'
  );

  emitEvent({
    tenantId: request.tenantId,
    type: 'draft_rewritten',
    entityType: 'version',
    entityId: crypto.randomUUID(),
    metadata: {
      platform: request.platform,
      intent: request.intent
    }
  });

  return {
    rewrittenContent
  };
}
