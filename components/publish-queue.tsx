interface PublishJob {
  id: string;
  platform: string;
  scheduledAt?: string;
  provider: string;
  status: string;
}

interface PublishQueueProps {
  jobs: PublishJob[];
}

export function PublishQueue({ jobs }: PublishQueueProps) {
  return (
    <section className="border p-6">
      <h2 className="text-2xl font-semibold">
        Publish queue
      </h2>

      <div className="mt-4 space-y-3">
        {jobs.map((job) => (
          <article
            key={job.id}
            className="border p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold capitalize">
                  {job.platform}
                </h3>

                <p className="text-sm text-gray-600">
                  {job.provider}
                </p>
              </div>

              <span className="text-xs uppercase">
                {job.status}
              </span>
            </div>

            {job.scheduledAt && (
              <p className="mt-2 text-sm text-gray-600">
                Scheduled: {job.scheduledAt}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
