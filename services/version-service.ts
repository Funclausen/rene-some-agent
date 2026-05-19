export interface VersionRecord {
  id: string;
  postId: string;
  versionNumber: number;
  content: string;
  createdAt: string;
}

export function createVersion(
  postId: string,
  versionNumber: number,
  content: string
): VersionRecord {
  return {
    id: crypto.randomUUID(),
    postId,
    versionNumber,
    content,
    createdAt: new Date().toISOString()
  };
}
