import Note from "./Note";
import AddNote from "./AddNote";

export default function NotesList({ notes, handleAddNote, deleteNote }) {
  return (
    <div className="notes-list">
      <AddNote handleAddNote={handleAddNote} />
      {notes.map((note) => (
        <Note notes={notes} deleteNote={deleteNote} />
      ))}
    </div>
  );
}
