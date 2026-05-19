import { NextRequest, NextResponse } from 'next/server';

import { createPublishingJob } from '../../../services/publishing-service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = await createPublishingJob({
      provider: body.provider,
      platform: body.platform,
      content: body.content,
      mediaUrl: body.mediaUrl,
      scheduledAt: body.scheduledAt
    });

    return NextResponse.json({
      success: true,
      result
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: 'Publishing failed'
      },
      {
        status: 500
      }
    );
  }
}
