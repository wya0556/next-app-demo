import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';
  
  return NextResponse.json({
    message: `Hello ${name}!`,
    timestamp: new Date().toISOString(),
    method: 'GET',
    route: '/api/hello'
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    return NextResponse.json({
      message: 'Data received successfully!',
      data: body,
      timestamp: new Date().toISOString(),
      method: 'POST',
      route: '/api/hello'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON data' },
      { status: 400 }
    );
  }
} 