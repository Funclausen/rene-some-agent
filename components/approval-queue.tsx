interface ApprovalItem {
  id: string;
  platform: string;
  headline: string;
  status: string;
}

interface ApprovalQueueProps {
  items: ApprovalItem[];
}

export function ApprovalQueue({
  items
}: ApprovalQueueProps) {
  return (
    <section className="border p-6">
      <h2 className="text-2xl font-semibold">
        Approval queue
      </h2>

      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="border p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">
                  {item.headline}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.platform}
                </p>
              </div>

              <span className="text-xs uppercase">
                {item.status}
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              <button className="border px-3 py-2 text-sm">
                Godkend
              </button>

              <button className="border px-3 py-2 text-sm">
                Bed AI omskrive
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
