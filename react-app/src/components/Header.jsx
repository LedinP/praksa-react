function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a className="logo" href="/">
          Eldin<span> Ponjević</span>
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="/">Početna</a></li>
            <li><a href="#igre">Igre</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
