import { IdeaForm } from '../../components/idea-form';

export default function DashboardPage() {
  return (
    <main className="min-h-screen p-12">
      <h1 className="text-4xl font-bold">Content Dashboard</h1>

      <p className="mt-4 text-lg">
        Opret idéer og generér platformspecifikke opslag.
      </p>

      <IdeaForm />
    </main>
  );
}
