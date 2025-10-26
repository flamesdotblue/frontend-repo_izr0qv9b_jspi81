import { Home, Star, Plus, Tag } from "lucide-react";

export default function BottomBar({ onNew }) {
  return (
    <nav className="fixed bottom-0 inset-x-0 z-20 bg-white/90 backdrop-blur border-t border-neutral-200">
      <div className="max-w-md mx-auto px-6 h-16 flex items-center justify-between">
        <button className="flex flex-col items-center text-[11px] text-neutral-600">
          <Home size={20} />
          <span>Home</span>
        </button>
        <button className="flex flex-col items-center text-[11px] text-neutral-600">
          <Tag size={20} />
          <span>Tags</span>
        </button>
        <button
          onClick={onNew}
          className="h-12 w-12 -mt-8 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 text-white flex items-center justify-center shadow-lg active:scale-95"
          aria-label="New note"
        >
          <Plus size={22} />
        </button>
        <button className="flex flex-col items-center text-[11px] text-neutral-600">
          <Star size={20} />
          <span>Favorites</span>
        </button>
        <div className="w-6" />
      </div>
    </nav>
  );
}
