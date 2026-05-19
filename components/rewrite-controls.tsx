'use client';

import { RewriteIntent } from '../lib/rewrite-types';

const rewriteOptions: {
  label: string;
  intent: RewriteIntent;
}[] = [
  {
    label: 'Mere personligt',
    intent: 'make_more_personal'
  },
  {
    label: 'Kortere version',
    intent: 'make_shorter'
  },
  {
    label: 'Mere lokalt fokus',
    intent: 'make_more_local'
  },
  {
    label: 'Mere storytelling',
    intent: 'make_more_storytelling'
  },
  {
    label: 'Fjern AI sprog',
    intent: 'remove_ai_language'
  },
  {
    label: 'Bedre CTA',
    intent: 'optimize_cta'
  }
];

interface RewriteControlsProps {
  onRewrite: (intent: RewriteIntent) => void;
}

export function RewriteControls(
  props: RewriteControlsProps
) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {rewriteOptions.map((option) => (
        <button
          key={option.intent}
          type="button"
          onClick={() => props.onRewrite(option.intent)}
          className="border px-3 py-2 text-sm"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
