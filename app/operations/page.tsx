import { ActivityFeed } from '../../components/activity-feed';
import { ApprovalQueue } from '../../components/approval-queue';
import { PublishQueue } from '../../components/publish-queue';

const mockEvents = [
  {
    id: '1',
    tenantId: 'tenant-1',
    type: 'draft_generated',
    entityType: 'post',
    entityId: 'post-1',
    createdAt: new Date().toISOString()
  }
];

const mockApprovalItems = [
  {
    id: '1',
    platform: 'facebook',
    headline: 'Nyt opslag om lokal udvikling',
    status: 'in_review'
  }
];

const mockPublishJobs = [
  {
    id: '1',
    platform: 'linkedin',
    provider: 'buffer',
    status: 'scheduled',
    scheduledAt: new Date().toISOString()
  }
];

export default function OperationsPage() {
  return (
    <main className="min-h-screen p-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Operations Center
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Workflow orchestration, approvals and publishing.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <ActivityFeed events={mockEvents} />

        <ApprovalQueue items={mockApprovalItems} />

        <PublishQueue jobs={mockPublishJobs} />
      </div>
    </main>
  );
}
