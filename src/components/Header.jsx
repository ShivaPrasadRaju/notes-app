export default function Header({ handleSetDarkMode }) {
  return (
    <div className="header">
      <h1>Notes App</h1>
      <button
        className="save"
        onClick={() => handleSetDarkMode((prev) => !prev)}
      >
        toggle
      </button>
    </div>
  );
}
