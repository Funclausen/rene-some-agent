export interface SessionUser {
  id: string;
  email: string;
  tenantId: string;
  role: 'owner' | 'admin' | 'editor' | 'viewer';
}

export async function getCurrentUser(): Promise<SessionUser | null> {
  return {
    id: 'user-1',
    email: 'pbcl@eaaa.dk',
    tenantId: 'tenant-1',
    role: 'owner'
  };
}
