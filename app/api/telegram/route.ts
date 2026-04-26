import { NextRequest, NextResponse } from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(request: NextRequest) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return NextResponse.json(
      { error: 'Telegram configuration is missing' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, alcoholPreference, variant } = body;

    if (!name || !alcoholPreference) {
      return NextResponse.json(
        { error: 'Name and alcohol preference are required' },
        { status: 400 }
      );
    }

    const message = `
💌 *Новый ответ на свадебную анкету!*

👤 *Имя:* ${name}
🍷 *Пожелания по алкоголю:* ${alcoholPreference}
🎨 *Вариант лендинга:* ${variant || 'Не указан'}
    `.trim();

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send message to Telegram' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
