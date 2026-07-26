import { NextResponse } from 'next/server';

const MAX_FIELD_LENGTH = 2_000;

function clean(value: unknown) {
  return typeof value === 'string' ? value.trim().slice(0, MAX_FIELD_LENGTH) : '';
}

export async function POST(request: Request) {
  let input: Record<string, unknown>;

  try {
    input = await request.json();
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida' }, { status: 400 });
  }

  const lead = {
    id: clean(input.id),
    createdAt: clean(input.createdAt),
    channelName: clean(input.channelName),
    channelUrl: clean(input.channelUrl),
    projectNeeds: clean(input.projectNeeds),
    source: clean(input.source),
    pageUrl: clean(input.pageUrl),
    referrer: clean(input.referrer),
    utmSource: clean(input.utmSource),
    utmMedium: clean(input.utmMedium),
    utmCampaign: clean(input.utmCampaign),
    utmContent: clean(input.utmContent),
    utmTerm: clean(input.utmTerm),
  };

  if (!lead.channelName || !lead.projectNeeds) {
    return NextResponse.json({ error: 'Faltan datos requeridos' }, { status: 400 });
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json({ stored: false, reason: 'webhook_not_configured' }, { status: 202 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(5_000),
    });

    if (!response.ok) {
      throw new Error(`Webhook responded ${response.status}`);
    }

    return NextResponse.json({ stored: true });
  } catch {
    return NextResponse.json({ stored: false, reason: 'webhook_failed' }, { status: 502 });
  }
}
