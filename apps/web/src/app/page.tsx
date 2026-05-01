import { Button, Card } from "@repo/ui";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 sm:items-start">
        <Card className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">
            Monorepo Hackathon Starter
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            This is a lightweight monorepo using npm workspaces and Turborepo.
            Shared components live in{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">
              packages/ui
            </code>{" "}
            and are consumed by the Next.js app in{" "}
            <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded text-sm">
              apps/web
            </code>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </Card>
      </main>
    </div>
  );
}
