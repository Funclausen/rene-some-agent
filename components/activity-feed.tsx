import { WorkflowEvent } from '../lib/event-types';

interface ActivityFeedProps {
  events: WorkflowEvent[];
}

export function ActivityFeed({ events }: ActivityFeedProps) {
  return (
    <section className="border p-6">
      <h2 className="text-2xl font-semibold">Activity feed</h2>

      {events.length === 0 ? (
        <p className="mt-4 text-sm text-gray-600">
          Ingen aktiviteter endnu.
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {events.map((event) => (
            <li key={event.id} className="border p-3 text-sm">
              <div className="font-semibold">{event.type}</div>
              <div className="text-gray-600">
                {event.entityType} · {event.entityId}
              </div>
              <div className="text-xs text-gray-500">
                {event.createdAt}
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
