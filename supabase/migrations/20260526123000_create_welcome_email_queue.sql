create extension if not exists pgcrypto;

create table if not exists public.welcome_email_queue (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  email text not null,
  language text not null,
  template_key text not null default 'welcome_after_confirm',
  status text not null default 'pending',
  send_after timestamptz not null,
  sent_at timestamptz null,
  attempts integer not null default 0,
  last_error text null,
  provider_message_id text null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint welcome_email_queue_user_template_unique unique (user_id, template_key)
);

create index if not exists welcome_email_queue_status_send_after_idx
  on public.welcome_email_queue (status, send_after);

alter table public.welcome_email_queue enable row level security;
