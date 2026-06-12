import Note from "./Note";
import AddNote from "./AddNote";

export default function NotesList({ notes, handleAddNote, deleteNote }) {
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}
