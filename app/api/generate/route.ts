import { NextRequest, NextResponse } from 'next/server';

import { generatePlatformPosts } from '../../../services/post-generator';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const posts = await generatePlatformPosts({
      idea: body.idea,
      hashtagCategoryIds: body.hashtagCategoryIds ?? [],
      provider: body.provider ?? 'openai'
    });

    return NextResponse.json({
      success: true,
      posts
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to generate posts'
      },
      {
        status: 500
      }
    );
  }
}
