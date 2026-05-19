import { RewriteRequest, RewriteResult } from '../lib/rewrite-types';

const rewriteStrategies: Record<string, string> = {
  make_more_personal:
    'Make the text more personal, human and emotionally grounded.',

  make_shorter:
    'Reduce the length while preserving the key message.',

  make_more_local:
    'Increase local relevance and community connection.',

  make_more_conservative:
    'Adjust the tone toward responsible conservative values.',

  make_less_aggressive:
    'Reduce confrontation and make the tone calmer and more constructive.',

  make_more_storytelling:
    'Improve narrative flow and storytelling elements.',

  remove_ai_language:
    'Remove generic AI sounding language and corporate phrasing.',

  optimize_cta:
    'Improve the call to action and engagement quality.',

  platform_optimize:
    'Optimize structure and pacing for the selected platform.'
};

export function buildRewriteInstruction(
  request: RewriteRequest
): string {
  const strategy = rewriteStrategies[request.intent];

  return `
REWRITE TASK:
${strategy}

PLATFORM:
${request.platform}

ORIGINAL CONTENT:
${request.originalContent}

ADDITIONAL INSTRUCTION:
${request.extraInstruction ?? 'None'}

RULES:
- Preserve authenticity
- Avoid generic AI language
- Avoid corporate phrasing
- Keep the message concrete
- Maintain human rhythm
- Maintain political clarity

Return only the rewritten content.
`;
}

export function createRewriteResult(
  content: string,
  intent: RewriteRequest['intent']
): RewriteResult {
  return {
    content,
    intent,
    createdAt: new Date().toISOString()
  };
}
