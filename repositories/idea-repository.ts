import { supabase } from '../lib/supabase';
import {
  ListRepositoryResult,
  RepositoryResult
} from '../lib/repository-types';

export interface IdeaRecord {
  id: string;
  tenant_id: string;
  headline: string;
  raw_idea: string;
  status: string;
  created_at: string;
}

export async function createIdeaRecord(
  input: {
    tenantId: string;
    headline: string;
    rawIdea: string;
  }
): Promise<RepositoryResult<IdeaRecord>> {
  const result = await supabase
    .from('ideas')
    .insert({
      tenant_id: input.tenantId,
      headline: input.headline,
      raw_idea: input.rawIdea
    })
    .select()
    .single();

  return {
    data: result.data,
    error: result.error?.message ?? null
  };
}

export async function getIdeasByTenant(
  tenantId: string
): Promise<ListRepositoryResult<IdeaRecord>> {
  const result = await supabase
    .from('ideas')
    .select('*')
    .eq('tenant_id', tenantId)
    .order('created_at', {
      ascending: false
    });

  return {
    data: result.data ?? [],
    error: result.error?.message ?? null
  };
}
