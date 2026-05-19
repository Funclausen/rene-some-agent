'use client';

import { GeneratedPost } from '../lib/types';

interface PostReviewProps {
  posts: GeneratedPost[];
}

export function PostReview({ posts }: PostReviewProps) {
  return (
    <section className="mt-10 space-y-6">
      {posts.map((post) => (
        <article
          key={post.platform}
          className="border p-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold capitalize">
              {post.platform}
            </h2>

            <div className="flex gap-2">
              <button className="border px-3 py-2 text-sm">
                Godkend
              </button>

              <button className="border px-3 py-2 text-sm">
                Bed AI omskrive
              </button>
            </div>
          </div>

          <pre className="mt-4 whitespace-pre-wrap text-sm">
            {post.content}
          </pre>
        </article>
      ))}
    </section>
  );
}
