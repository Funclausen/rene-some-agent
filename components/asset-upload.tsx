'use client';

import { useState } from 'react';

export function AssetUpload() {
  const [files, setFiles] = useState<FileList | null>(null);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFiles(event.target.files);
  }

  return (
    <section className="mt-8 border p-4">
      <h2 className="text-2xl font-semibold">Assets</h2>

      <input
        type="file"
        multiple
        onChange={handleChange}
        className="mt-4"
      />

      {files && (
        <ul className="mt-4 space-y-2 text-sm">
          {Array.from(files).map((file) => (
            <li key={file.name}>
              {file.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
