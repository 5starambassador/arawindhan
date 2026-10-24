import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, institution, bookTitle, bookSlug, date } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required fields.' },
        { status: 400 }
      );
    }

    const payload = {
      name,
      phone,
      email,
      institution: institution || 'N/A',
      bookTitle: bookTitle || 'General Book Request',
      bookSlug: bookSlug || 'general',
      date: date || new Date().toISOString(),
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    };

    // Forward to Google Sheet Webhook if configured
    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL;

    let webhookSuccess = false;
    let webhookError = null;

    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          redirect: 'follow',
        });
        webhookSuccess = response.ok;
      } catch (err: any) {
        webhookError = err.message || 'Failed to dispatch to Google Sheets webhook';
        console.error('Error forwarding lead to Google Sheet webhook:', err);
      }
    }

    return NextResponse.json({
      success: true,
      data: payload,
      webhookSent: webhookSuccess,
      webhookConfigured: Boolean(webhookUrl),
      ...(webhookError && { webhookError }),
    });
  } catch (error: any) {
    console.error('Lead submission API error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing lead.' },
      { status: 500 }
    );
  }
}
