# Supabase setup

Supabase must be connected before the app can be tested end to end.

## When to connect Supabase

Connect Supabase now.

The current codebase already expects:

- Supabase database
- Supabase Storage
- environment variables
- schema migrations
- tenant scoped records
- workflow events
- queue jobs

Without Supabase, the app can render and some mocked flows can run, but persistence, uploads, events and queues will not work properly.

## Create project

1. Go to Supabase.
2. Create a new project.
3. Suggested project name:

```text
rene-some-agent
```

4. Save the project URL and anon key.
5. Create a Storage bucket named:

```text
assets
```

## Environment variables

Copy `env.example` to `.env.local`.

Fill in:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
PUBLISHING_WEBHOOK_URL=
```

## Apply database schemas

Run the SQL files in this order in Supabase SQL editor:

```text
supabase/schema.sql
supabase/multi-tenant-schema.sql
supabase/event-persistence-schema.sql
```

## Required storage bucket

Create a public or signed-access bucket:

```text
assets
```

For MVP testing, public read access is acceptable.

For production, use signed URLs and tenant scoped access policies.

## Notes about index.html

This project is a Next.js application.

There is no root `index.html` file because Next.js renders pages from the `app` directory.

The main entry points are:

```text
app/page.tsx
app/dashboard/page.tsx
app/operations/page.tsx
```

The uploaded original HTML prototype should be kept as a design and prompt reference, but the production app should be implemented as Next.js components.
