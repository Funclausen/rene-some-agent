create table workflow_events (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  type text not null,
  entity_type text not null,
  entity_id text not null,
  actor_id text,
  metadata jsonb,
  created_at timestamp with time zone default now()
);

create table workflow_queue_jobs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  queue_name text not null,
  payload jsonb not null,
  status text not null default 'pending',
  attempts integer default 0,
  last_error text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);
