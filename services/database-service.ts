import { supabase } from '../lib/supabase';
import { IdeaInput } from '../lib/types';

export async function createIdea(input: IdeaInput) {
  return supabase
    .from('ideas')
    .insert({
      headline: input.headline,
      raw_idea: input.rawIdea,
      key_message: input.keyMessage,
      target_audience: input.targetAudience,
      desired_tone: input.desiredTone
    })
    .select()
    .single();
}

export async function getIdeas() {
  return supabase
    .from('ideas')
    .select('*')
    .order('created_at', {
      ascending: false
    });
}
