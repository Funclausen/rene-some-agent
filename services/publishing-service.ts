export interface PublishJobInput {
  provider: 'buffer' | 'make' | 'n8n';
  platform: string;
  content: string;
  mediaUrl?: string;
  scheduledAt?: string;
}

export async function createPublishingJob(
  input: PublishJobInput
) {
  console.log('Creating publishing job', input);

  return {
    success: true,
    provider: input.provider,
    createdAt: new Date().toISOString()
  };
}
