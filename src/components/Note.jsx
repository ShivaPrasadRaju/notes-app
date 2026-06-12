import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date, deleteNote }) {
  const handleDeleteNote = (id) => {
    deleteNote(id);
  };
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever className="delete-icon" onClick={handleDeleteNote} />
      </div>
    </div>
  );
}
