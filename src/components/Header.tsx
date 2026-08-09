import { Link, useLocation } from "react-router-dom";

type Language = "en" | "de";

type HeaderProps = {
  language: Language;
};

function Header({ language }: HeaderProps) {
  const location = useLocation();

  const otherLanguage = language === "en" ? "de" : "en";

  const languagePath = location.pathname.replace(
    `/${language}`,
    `/${otherLanguage}`
  );

  return (
    <header className="site-header">
      <nav className="navigation">
        <Link to={`/${language}`} className="site-name">
          Sophie Bayer
        </Link>

        <div className="navigation-links">
          <a href={`/${language}#work`}>
            {language === "en" ? "Work" : "Work"}
          </a>

          <a href={`/${language}#about`}>
            {language === "en" ? "About" : "Über mich"}
          </a>

          <a href={`/${language}#contact`}>
            {language === "en" ? "Contact" : "Kontakt"}
          </a>

          <Link to={languagePath} className="language-switch">
            {otherLanguage.toUpperCase()}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;