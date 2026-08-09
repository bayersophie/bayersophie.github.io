import type { Language } from "../data/projects";

type FooterProps = {
  language: Language;
};

const content = {
  en: {
    tagline: "Media Engineering Portfolio",
  },
  de: {
    tagline: "Media Engineering Portfolio",
  },
};

function Footer({ language }: FooterProps) {
  const text = content[language];
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <span>
          © {year} Sophie Bayer — {text.tagline}
        </span>

        <a href="mailto:bayer.sophie@outlook.de">
          bayer.sophie@outlook.de
        </a>
      </div>
    </footer>
  );
}

export default Footer;
