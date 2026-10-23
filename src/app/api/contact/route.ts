import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ContactRequestBody {
  name: string;
  email: string;
  organization?: string;
  category: string;
  message: string;
  language?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    // 1. Validation
    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Name must be at least 2 characters.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email || !emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (!body.message || body.message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 10 characters.' },
        { status: 400 }
      );
    }

    // 2. Generate Reference Ticket ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const ticketId = `INQ-${new Date().getFullYear()}-${randomSuffix}`;
    const timestamp = new Date().toISOString();

    const record = {
      ticketId,
      timestamp,
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      organization: (body.organization || 'Individual').trim(),
      category: body.category || 'General Inquiry',
      message: body.message.trim(),
      language: body.language || 'en',
      status: 'RECEIVED',
    };

    // 3. Persist to local JSON repository (safe fallback for server environment)
    try {
      const dataDir = path.join(process.cwd(), 'src', 'data');
      const filePath = path.join(dataDir, 'inquiries.json');

      let existingInquiries = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        try {
          existingInquiries = JSON.parse(fileContent);
        } catch {
          existingInquiries = [];
        }
      }

      existingInquiries.push(record);
      fs.writeFileSync(filePath, JSON.stringify(existingInquiries, null, 2), 'utf8');
    } catch (fsError) {
      console.warn('Could not write to inquiries.json file, continuing with console log:', fsError);
    }

    console.log(`[BACKEND CONTACT DISPATCH] New Inquiry Logged: ${ticketId} from ${record.email} (${record.category})`);

    // 4. Return Success Response
    return NextResponse.json(
      {
        success: true,
        ticketId,
        message:
          body.language === 'ta'
            ? 'தங்களின் செய்தி பதிவு செய்யப்பட்டது. திட்ட ஒருங்கிணைப்பு அலுவலகம் விரைவில் தொடர்பு கொள்ளும்.'
            : 'Your inquiry has been successfully registered. The administrative desk will reach out shortly.',
        data: {
          ticketId,
          timestamp,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('[API CONTACT ERROR]:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error. Please try again later.' },
      { status: 500 }
    );
  }
}
