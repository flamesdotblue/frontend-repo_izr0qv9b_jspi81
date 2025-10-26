import { Pin, Star } from "lucide-react";

function NoteCard({ note, onPin, onStar }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {note.tags?.map((t) => (
              <span key={t} className="px-2 py-0.5 text-[10px] rounded-full bg-indigo-50 text-indigo-600">
                #{t}
              </span>
            ))}
            {note.starred && (
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-amber-50 text-amber-700">Fav</span>
            )}
            {note.pinned && (
              <span className="px-2 py-0.5 text-[10px] rounded-full bg-fuchsia-50 text-fuchsia-700">Pinned</span>
            )}
          </div>
          <p className="text-[15px] leading-relaxed text-neutral-800 whitespace-pre-wrap">
            {note.content}
          </p>
          <p className="text-[11px] text-neutral-400 mt-2">
            {new Date(note.createdAt).toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 pl-2">
          <button
            onClick={() => onPin(note.id)}
            className={`p-2 rounded-lg hover:bg-neutral-100 active:scale-95 transition ${
              note.pinned ? "text-fuchsia-600" : "text-neutral-600"
            }`}
            aria-label="Pin"
          >
            <Pin size={18} />
          </button>
          <button
            onClick={() => onStar(note.id)}
            className={`p-2 rounded-lg hover:bg-neutral-100 active:scale-95 transition ${
              note.starred ? "text-amber-500" : "text-neutral-600"
            }`}
            aria-label="Star"
          >
            <Star size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NotesFeed({ notes, onPin, onStar }) {
  const pinned = notes.filter((n) => n.pinned);
  const others = notes.filter((n) => !n.pinned);

  return (
    <div className="max-w-md mx-auto px-4 space-y-3 pb-24">
      {pinned.length > 0 && (
        <div className="space-y-2">
          <div className="text-[11px] text-neutral-500 uppercase tracking-wide">Pinned</div>
          {pinned.map((n) => (
            <NoteCard key={n.id} note={n} onPin={onPin} onStar={onStar} />)
          )}
        </div>
      )}

      <div className="space-y-2">
        {others.map((n) => (
          <NoteCard key={n.id} note={n} onPin={onPin} onStar={onStar} />)
        )}
        {notes.length === 0 && (
          <div className="text-center text-neutral-500 py-12">
            Start capturing thoughts with the composer above.
          </div>
        )}
      </div>
    </div>
  );
}
