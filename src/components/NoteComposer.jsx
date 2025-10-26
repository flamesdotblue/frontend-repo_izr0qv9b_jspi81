import { useState } from "react";
import { Mic, Paperclip, Wand2 } from "lucide-react";

export default function NoteComposer({ onAdd }) {
  const [text, setText] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleAI = async () => {
    if (!text.trim()) return;
    setProcessing(true);
    // Simulate AI assist locally for design purposes
    await new Promise((r) => setTimeout(r, 700));
    const suggestion = `Summary: ${text.split(" ").slice(0, 10).join(" ")}${
      text.split(" ").length > 10 ? "…" : ""
    }\nAction items: • Review • Tag • Share`;
    setText((t) => `${t}\n\n${suggestion}`);
    setProcessing(false);
  };

  const handleAdd = () => {
    const content = text.trim();
    if (!content) return;
    onAdd({ content, createdAt: new Date().toISOString(), pinned: false, starred: false, tags: ["inbox"] });
    setText("");
  };

  return (
    <div className="max-w-md mx-auto px-4 pt-4">
      <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Capture a thought…"
          rows={4}
          className="w-full p-4 outline-none resize-none text-[15px] placeholder:text-neutral-400"
        />
        <div className="flex items-center justify-between border-t border-neutral-200 p-2">
          <div className="flex items-center gap-1.5">
            <button className="p-2 rounded-lg hover:bg-neutral-100 active:scale-95 transition" aria-label="Attach">
              <Paperclip size={18} />
            </button>
            <button className="p-2 rounded-lg hover:bg-neutral-100 active:scale-95 transition" aria-label="Record">
              <Mic size={18} />
            </button>
            <button
              onClick={handleAI}
              disabled={processing || !text.trim()}
              className="p-2 rounded-lg hover:bg-indigo-50 active:scale-95 transition text-indigo-600 disabled:opacity-40 disabled:hover:bg-transparent"
              aria-label="AI Assist"
            >
              <Wand2 size={18} />
            </button>
          </div>
          <button
            onClick={handleAdd}
            disabled={!text.trim()}
            className="px-3 py-1.5 rounded-xl bg-neutral-900 text-white text-sm font-medium disabled:opacity-40"
          >
            Save
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-[11px] text-neutral-500">Quick tags:</span>
        {"work,inbox,ideas,personal".split(",").map((t) => (
          <span key={t} className="px-2 py-1 text-[11px] rounded-full bg-neutral-100 text-neutral-700">
            #{t}
          </span>
        ))}
      </div>
    </div>
  );
}
