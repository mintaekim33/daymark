
import { NavLink } from "react-router";

const navigationItems = [
  { name: "Dashboard", path: "/", icon: "⌂" },
  { name: "Goals", path: "/goals", icon: "◎" },
  { name: "Projects", path: "/projects", icon: "▤" },
  { name: "My Tasks", path: "/tasks", icon: "☑" },
  { name: "Calendar", path: "/calendar", icon: "▦" },
];

function Sidebar() {
  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-900 px-4 py-6 text-white">
      {/* Brand */}
      <div className="mb-10 flex items-center gap-3 px-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500 text-xl font-bold">
          D
        </div>

        <span className="text-xl font-bold tracking-wide">
          Daymark
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Workspace
        </p>

        <div className="space-y-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`
              }
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Bottom section */}
      <div className="border-t border-slate-700 pt-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-slate-300 transition-colors hover:bg-slate-800 hover:text-white">
          <span className="text-lg">⚙</span>
          Settings
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
