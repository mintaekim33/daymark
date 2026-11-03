import { useEffect, useState } from "react";

interface HealthResponse {
  status: string;
  application: string;
}

function App() {
  const [apiStatus, setApiStatus] = useState("Checking...");

  useEffect(() => {
    fetch("/api/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("API request failed");
        }
        return response.json();
      })
      .then((data: HealthResponse) => {
        setApiStatus(data.status);
      })
      .catch(() => {
        setApiStatus("Disconnected");
      });
  }, []);

  return (
    <main className="min-h-screen p-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">
          Daymark
        </h1>

        <span className="text-sm text-slate-500">
          Your personal command center
        </span>
      </header>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">
          Make today count.
        </h2>

        <p className="mt-2 text-slate-500">
          Organize your goals, projects and daily tasks.
        </p>

        <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="font-semibold">Backend connection</h3>

          <p className="mt-2 text-sm text-slate-600">
            API status: {apiStatus}
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;