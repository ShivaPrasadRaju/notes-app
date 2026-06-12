import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

export default function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "12/06/26",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "12/06/26",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "12/06/26",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "15/06/26",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];

    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}
