export interface RepositoryResult<T> {
  data: T | null;
  error: string | null;
}

export interface ListRepositoryResult<T> {
  data: T[];
  error: string | null;
}

export interface TenantScopedInput {
  tenantId: string;
}
