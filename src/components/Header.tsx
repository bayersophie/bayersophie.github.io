import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <nav className="navigation">
        <Link to="/" className="site-name">
          Sophie Bayer
        </Link>

        <div className="navigation-links">
          <a href="/#work">Work</a>
          <a href="/#about">About</a>
          <a href="/#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;