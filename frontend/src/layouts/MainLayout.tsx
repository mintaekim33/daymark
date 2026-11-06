
import { useState } from "react";
import type { ReactNode } from "react";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(true)} />

        <main className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
