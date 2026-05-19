export interface BufferPublishInput {
  text: string;
  mediaUrl?: string;
  scheduledAt?: string;
}

export async function publishToBuffer(
  input: BufferPublishInput
) {
  const webhookUrl = process.env.PUBLISHING_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error('Missing publishing webhook URL');
  }

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      provider: 'buffer',
      payload: input
    })
  });

  if (!response.ok) {
    throw new Error('Failed to publish to Buffer');
  }

  return response.json();
}
