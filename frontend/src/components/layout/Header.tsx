
function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Left side */}
      <div>
        <h2 className="text-lg font-semibold text-slate-800">
          Dashboard
        </h2>
        <p className="text-sm text-slate-500">
          Welcome back! Here's your overview.
        </p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button
          type="button"
          aria-label="Notifications"
          className="relative rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
        >
          <span className="text-xl">♧</span>
          <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
            U
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-slate-800">
              My Account
            </p>
            <p className="text-xs text-slate-500">
              Personal Workspace
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
