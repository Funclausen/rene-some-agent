create table ideas (
  id uuid primary key default gen_random_uuid(),
  headline text not null,
  raw_idea text not null,
  key_message text,
  target_audience text,
  desired_tone text,
  status text default 'draft',
  created_at timestamp with time zone default now()
);

create table posts (
  id uuid primary key default gen_random_uuid(),
  idea_id uuid references ideas(id) on delete cascade,
  platform text not null,
  status text default 'draft',
  created_at timestamp with time zone default now()
);

create table post_versions (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references posts(id) on delete cascade,
  version_number integer not null,
  content text not null,
  hashtags text[],
  ai_provider text,
  ai_model text,
  approved boolean default false,
  created_at timestamp with time zone default now()
);

create table hashtags (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  hashtag text not null,
  active boolean default true
);

create table publishing_jobs (
  id uuid primary key default gen_random_uuid(),
  post_id uuid references posts(id) on delete cascade,
  provider text not null,
  status text default 'pending',
  external_id text,
  error_message text,
  created_at timestamp with time zone default now()
);
