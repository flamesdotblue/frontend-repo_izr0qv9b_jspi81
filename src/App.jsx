import { useMemo, useState } from "react";
import AppHeader from "./components/AppHeader";
import NoteComposer from "./components/NoteComposer";
import NotesFeed from "./components/NotesFeed";
import BottomBar from "./components/BottomBar";

function seedNotes() {
  const now = Date.now();
  return [
    {
      id: "n1",
      content:
        "Meeting with design: align on mobile-first layout for AI Notes. Explore summarization chip UI.",
      createdAt: new Date(now - 1000 * 60 * 20).toISOString(),
      pinned: true,
      starred: false,
      tags: ["work", "ui"],
    },
    {
      id: "n2",
      content:
        "Idea: voice to note with instant outline. Try 3-tier structure: Summary → Bullets → Tasks.",
      createdAt: new Date(now - 1000 * 60 * 120).toISOString(),
      pinned: false,
      starred: true,
      tags: ["ideas"],
    },
  ];
}

function App() {
  const initial = useMemo(() => seedNotes(), []);
  const [notes, setNotes] = useState(initial);

  const addNote = (payload) => {
    const id = `n${Math.random().toString(36).slice(2, 8)}`;
    setNotes((prev) => [{ id, ...payload }, ...prev]);
  };

  const togglePin = (id) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, pinned: !n.pinned } : n)));
  };

  const toggleStar = (id) => {
    setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, starred: !n.starred } : n)));
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        <AppHeader />
        <main className="flex-1">
          <div className="max-w-md mx-auto">
            <div className="px-4 pt-4">
              <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-violet-50 to-fuchsia-50 p-4 border border-indigo-100">
                <p className="text-sm text-neutral-700">
                  Capture quick thoughts, and let AI help summarize, extract tasks, and tag automatically.
                </p>
              </div>
            </div>
            <NoteComposer onAdd={addNote} />
            <section aria-label="Notes list" className="mt-4">
              <NotesFeed notes={notes} onPin={togglePin} onStar={toggleStar} />
            </section>
          </div>
        </main>
        <BottomBar onNew={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
      </div>
    </div>
  );
}

export default App;
