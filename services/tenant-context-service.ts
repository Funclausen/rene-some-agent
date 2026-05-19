export interface TenantContext {
  tenantId: string;
  brandProfileId: string;
  tenantName: string;
  activeCampaignId?: string;
  activeNarrativeTrack?: string;
  activeContentPillars: string[];
}

export async function resolveTenantContext(
  tenantId: string
): Promise<TenantContext> {
  return {
    tenantId,
    brandProfileId: 'default-brand-profile',
    tenantName: 'René Schneider',
    activeCampaignId: 'kommunalvalg-2025',
    activeNarrativeTrack: 'lokal-handlekraft',
    activeContentPillars: [
      'lokal udvikling',
      'erhverv',
      'tryghed',
      'frivillighed'
    ]
  };
}
