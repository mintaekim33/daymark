import { useState, type FormEvent } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import MainLayout from "./layouts/MainLayout";

// Temporary dashboard data
const stats = [
  {
    label: "Tasks completed",
    value: "6 / 10",
    detail: "4 tasks remaining",
  },
  {
    label: "Active projects",
    value: "4",
    detail: "Across your workspace",
  },
  {
    label: "Upcoming deadlines",
    value: "2",
    detail: "Due this week",
  },
];

const tasks = [
  {
    id: 1,
    title: "Finish Daymark application shell",
    project: "Daymark",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    title: "Review project milestones",
    project: "Portfolio",
    priority: "Medium",
    completed: false,
  },
  {
    id: 3,
    title: "Study React Router",
    project: "Learning",
    priority: "Low",
    completed: true,
  },
];

function DashboardPage() {
  const [dashboardTasks, setDashboardTasks] = useState(tasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskPriority, setNewTaskPriority] = useState("Medium");

  const toggleTask = (taskId: number) => {
    setDashboardTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (taskId: number) => {
    setDashboardTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  };

  const addTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = newTaskTitle.trim();

    if (!trimmedTitle) return;

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      project: "Personal",
      priority: newTaskPriority,
      completed: false,
    };

    setDashboardTasks((currentTasks) => [...currentTasks, newTask]);

    setNewTaskTitle("");
    setNewTaskPriority("Medium");
  };

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Welcome section */}
      <section>
        <p className="text-sm font-medium text-indigo-600">YOUR WORKSPACE</p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Make today count.
        </h1>

        <p className="mt-2 text-slate-500">
          Organize your goals, projects and daily tasks.
        </p>
      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-medium text-slate-500">{stat.label}</p>

            <p className="mt-3 text-3xl font-bold text-slate-900">
              {stat.value}
            </p>

            <p className="mt-2 text-xs text-slate-400">{stat.detail}</p>
          </div>
        ))}
      </section>

      {/* Tasks and focus */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* Task list */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-slate-900">
              Today's tasks
            </h2>

            <span className="text-sm text-indigo-600">
              {dashboardTasks.filter((task) => !task.completed).length}{" "}
              remaining
            </span>
          </div>

          <form
            onSubmit={addTask}
            className="mb-6 flex flex-col gap-3 sm:flex-row"
          >
            {/* Task title */}
            <input
              type="text"
              value={newTaskTitle}
              onChange={(event) => setNewTaskTitle(event.target.value)}
              placeholder="Add a new task..."
              className="min-w-0 flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />

            {/* Priority selection */}
            <select
              value={newTaskPriority}
              onChange={(event) => setNewTaskPriority(event.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            {/* Add button */}
            <button
              type="submit"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              + Add Task
            </button>
          </form>

          <div className="space-y-4">
            {dashboardTasks.map((task) => (
              <div
                key={task.id}
                className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <button
                    type="button"
                    aria-label={
                      task.completed
                        ? `Mark ${task.title} as incomplete`
                        : `Mark ${task.title} as complete`
                    }
                    aria-pressed={task.completed}
                    onClick={() => toggleTask(task.id)}
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors ${
                      task.completed
                        ? "border-indigo-600 bg-indigo-600 text-white"
                        : "border-slate-300 hover:border-indigo-500"
                    }`}
                  >
                    {task.completed && <span className="text-xs">✓</span>}
                  </button>

                  <div className="min-w-0">
                    <p
                      className={`truncate text-sm font-medium ${
                        task.completed
                          ? "text-slate-400 line-through"
                          : "text-slate-800"
                      }`}
                    >
                      {task.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {task.project}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                    {task.priority}
                  </span>

                  <button
                    type="button"
                    onClick={() => deleteTask(task.id)}
                    aria-label={`Delete ${task.title}`}
                    className="text-xs text-red-400 transition hover:text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Focus card */}
        <div className="rounded-xl bg-indigo-600 p-6 text-white shadow-sm">
          <p className="text-sm font-medium text-indigo-200">DAILY FOCUS</p>

          <h2 className="mt-4 text-xl font-bold">One step at a time.</h2>

          <p className="mt-3 text-sm leading-6 text-indigo-100">
            Consistent progress beats trying to do everything at once. Focus on
            completing your most important task today.
          </p>

          <div className="mt-8 rounded-lg bg-white/10 p-4">
            <p className="text-sm font-medium">Your next milestone</p>

            <p className="mt-2 text-sm text-indigo-100">
              Complete the Daymark frontend shell.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Temporary pages until we implement their real functionality
interface PlaceholderPageProps {
  title: string;
}

function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8">
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>

      <p className="mt-3 text-slate-500">This section is under development.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />

          <Route path="/goals" element={<PlaceholderPage title="Goals" />} />

          <Route
            path="/projects"
            element={<PlaceholderPage title="Projects" />}
          />

          <Route path="/tasks" element={<PlaceholderPage title="My Tasks" />} />

          <Route
            path="/calendar"
            element={<PlaceholderPage title="Calendar" />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
