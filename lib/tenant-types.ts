export type TenantRole = 'owner' | 'admin' | 'editor' | 'creator' | 'viewer';

export interface Tenant {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
}

export interface BrandProfile {
  id: string;
  tenantId: string;
  name: string;
  publicName: string;
  description?: string;
  active: boolean;
}

export interface TenantMember {
  id: string;
  tenantId: string;
  userId: string;
  role: TenantRole;
}
