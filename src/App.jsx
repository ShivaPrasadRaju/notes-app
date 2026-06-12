import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

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

  const [searchText, setSearchText] = useState("");
  // console.log(searchText);

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

  //delete note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  };

  return (
    <div className="main-container">
      <div className="container">
        <Header />
        <Search handleSearchText={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase()),
          )}
          handleAddNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}
