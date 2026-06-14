import "./Header.css";

export default function Header({ darkMode, handleSetDarkMode }) {
  return (
    <div className="header">
      <h1>Notes App</h1>
      {/* <button
        className="save"
        onClick={() => handleSetDarkMode((prev) => !prev)}
      >
        toggle
      </button> */}
      <div>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          checked={darkMode}
          onClick={() => handleSetDarkMode((prev) => !prev)}
        />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
    </div>
  );
}
