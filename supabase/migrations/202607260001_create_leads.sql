create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  channel_name text not null,
  channel_url text,
  project_needs text not null,
  phone text,
  email text,
  status text not null default 'nuevo'
    check (status in ('nuevo', 'contactado', 'pagado', 'entregado', 'descartado')),
  source text,
  page_url text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text,
  notes text
);

alter table public.leads enable row level security;

revoke all on table public.leads from anon, authenticated;

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists leads_email_idx on public.leads (email);
