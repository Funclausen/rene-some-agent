'use client';

import { useState } from 'react';

export function IdeaForm() {
  const [headline, setHeadline] = useState('');
  const [rawIdea, setRawIdea] = useState('');
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        provider: 'openai',
        hashtagCategoryIds: ['politik', 'lokalt'],
        idea: {
          headline,
          rawIdea
        }
      })
    });

    const data = await response.json();

    setResult(JSON.stringify(data, null, 2));
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
      <input
        className="border p-3"
        placeholder="Overskrift"
        value={headline}
        onChange={(event) => setHeadline(event.target.value)}
      />

      <textarea
        className="border p-3 min-h-[200px]"
        placeholder="Beskriv idéen"
        value={rawIdea}
        onChange={(event) => setRawIdea(event.target.value)}
      />

      <button
        type="submit"
        className="border px-4 py-3 font-semibold"
      >
        Generér opslag
      </button>

      {result && (
        <pre className="overflow-auto border p-4 text-sm">
          {result}
        </pre>
      )}
    </form>
  );
}
