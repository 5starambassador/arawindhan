import { NextRequest, NextResponse } from 'next/server';

const DEFAULT_GOOGLE_SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbxQltBiK46_SyIGRk1qWTqWZA45rxKGOJPfKrMo8BydpDodA_jiS-rAr4EWqVsYKFCG/exec';

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

    const now = new Date();
    const formattedDate = now.toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const payload = {
      name,
      phone,
      email,
      institution: institution || 'N/A',
      bookTitle: bookTitle || 'General Book Request',
      bookSlug: bookSlug || 'general',
      date: date || now.toISOString(),
      timestamp: formattedDate,
      formattedDate,
    };

    // Forward to Google Sheet Webhook
    const webhookUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL ||
      DEFAULT_GOOGLE_SHEET_WEBHOOK_URL;

    let webhookSuccess = false;
    let webhookResult: any = null;
    let webhookError = null;

    if (webhookUrl && webhookUrl.startsWith('http')) {
      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(payload),
          redirect: 'follow',
        });
        const text = await response.text();
        try {
          webhookResult = JSON.parse(text);
          webhookSuccess = webhookResult?.status === 'success' || response.ok;
        } catch {
          webhookSuccess = response.ok;
        }
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
      ...(webhookResult && { webhookResult }),
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
