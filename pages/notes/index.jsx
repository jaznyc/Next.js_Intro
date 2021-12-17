import React from 'react';
import Link from 'next/link';

const NoteHome = () => {
  const notes = new Array(15)
    .fill(1)
    .map((elem, idx) => ({ id: idx, title: `Note: ${idx}` }));
  return (
    <div>
      <h1>Notes Index Path</h1>

      {notes.map((note) => (
        <Link href="/notes/[id]" as={`/notes/${note.id}`}>
          <a>
            <strong>{note.title}</strong>
            </a>
        </Link>
      ))}
    </div>
  );
};

export default NoteHome;
