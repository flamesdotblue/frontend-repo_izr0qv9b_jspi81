import { Sparkles, Search, Settings } from "lucide-react";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-md mx-auto px-4 py-3 flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 flex items-center justify-center shadow-sm text-white">
          <Sparkles size={18} />
        </div>
        <div className="flex-1">
          <h1 className="text-base font-semibold tracking-tight">Aether Notes</h1>
          <p className="text-[11px] text-neutral-500 leading-tight">AI-powered, lightning fast</p>
        </div>
        <button aria-label="Search" className="p-2 rounded-lg hover:bg-neutral-100 active:scale-95 transition">
          <Search size={18} />
        </button>
        <button aria-label="Settings" className="p-2 rounded-lg hover:bg-neutral-100 active:scale-95 transition">
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}
