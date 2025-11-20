function Header({ theme, toggleTheme }) {
  return (
    <header className="top-bar">
      <div className="top-bar-inner">
        {/* Logo Node.js */}
        <div className="logo-area">
  <div className="logo-mark">n</div>
  <span className="logo-text">Node.js</span>
</div>


        {/* Nav + buscador + idioma + tema */}
        <div className="nav-area">
          <nav className="main-nav">
            <a href="#" className="nav-link">Downloads</a>
            <a href="#" className="nav-link">Docs</a>
            <a href="#" className="nav-link">Learn</a>
            <a href="#" className="nav-link">Community</a>
          </nav>

          <div className="nav-right">
            <div className="search-wrapper">
              <input
                className="search-input"
                placeholder="Start typing..."
              />
            </div>

            <select className="lang-select" defaultValue="es">
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>

            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
