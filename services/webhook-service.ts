export interface WebhookPayload {
  event: string;
  data: unknown;
}

export async function sendWebhook(
  payload: WebhookPayload
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
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Webhook request failed');
  }

  return response.json();
}
