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
    id: clean(input.id) || crypto.randomUUID(),
    createdAt: clean(input.createdAt) || new Date().toISOString(),
    channelName: clean(input.channelName),
    channelUrl: clean(input.channelUrl),
    projectNeeds: clean(input.projectNeeds),
    phone: clean(input.phone),
    email: clean(input.email),
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

  const supabaseUrl = process.env.SUPABASE_URL?.replace(/\/$/, '');
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  let storedInSupabase = false;
  let sentToWebhook = false;

  if (supabaseUrl && serviceRoleKey) {
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          apikey: serviceRoleKey,
          Authorization: `Bearer ${serviceRoleKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          id: lead.id,
          created_at: lead.createdAt,
          channel_name: lead.channelName,
          channel_url: lead.channelUrl || null,
          project_needs: lead.projectNeeds,
          phone: lead.phone || null,
          email: lead.email || null,
          source: lead.source || null,
          page_url: lead.pageUrl || null,
          referrer: lead.referrer || null,
          utm_source: lead.utmSource || null,
          utm_medium: lead.utmMedium || null,
          utm_campaign: lead.utmCampaign || null,
          utm_content: lead.utmContent || null,
          utm_term: lead.utmTerm || null,
        }),
        signal: AbortSignal.timeout(5_000),
      });

      storedInSupabase = response.ok;
    } catch {
      storedInSupabase = false;
    }
  }

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(5_000),
      });
      sentToWebhook = response.ok;
    } catch {
      sentToWebhook = false;
    }
  }

  return NextResponse.json(
    {
      stored: storedInSupabase || sentToWebhook,
      supabase: storedInSupabase,
      webhook: sentToWebhook,
    },
    { status: storedInSupabase || sentToWebhook ? 201 : 202 },
  );
}
