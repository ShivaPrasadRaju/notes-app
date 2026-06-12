import { MdDeleteForever } from "react-icons/md";

export default function Note({ id, text, date, deleteNote }) {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          onClick={() => deleteNote(id)}
        />
      </div>
    </div>
  );
}
