create table tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  created_at timestamp with time zone default now()
);

create table tenant_members (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  user_id uuid not null,
  role text not null,
  created_at timestamp with time zone default now()
);

create table brand_profiles (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references tenants(id) on delete cascade,
  name text not null,
  public_name text not null,
  description text,
  active boolean default true,
  created_at timestamp with time zone default now()
);

alter table ideas
add column tenant_id uuid references tenants(id) on delete cascade;

alter table posts
add column tenant_id uuid references tenants(id) on delete cascade;
