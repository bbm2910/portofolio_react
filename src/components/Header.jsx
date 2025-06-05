import { useState } from "react";
import "./Header.css";
import Title from "./Title";

const Header = ({ scrollToSection, aboutRef, projectsRef, cvRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    setMenuOpen(false); // close menu on click
  };

  const handleNavClick = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false); // close menu on click
  };

  return (
    <div className="header">
      <Title />
      <nav className="glitch-nav">
        <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <div className={`menu btns ${menuOpen ? "open" : ""}`}>
          <button className="btn" onClick={() => handleNavClick(aboutRef)}>
            ABOUT
          </button>
          <button className="btn" onClick={() => handleNavClick(cvRef)}>
            CV
          </button>
          <button className="btn" onClick={scrollToBottom}>
            CONTACT
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
