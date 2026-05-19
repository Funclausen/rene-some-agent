import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const file = formData.get('file');

  if (!file) {
    return NextResponse.json(
      {
        success: false,
        error: 'No file uploaded'
      },
      {
        status: 400
      }
    );
  }

  return NextResponse.json({
    success: true,
    uploaded: true
  });
}
