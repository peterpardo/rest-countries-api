import "./navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as farFaMoon } from "@fortawesome/free-regular-svg-icons";
import { faMoon as fasFaMoon } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [theme, setTheme] = useState("Dark Mode");

  const handleTheme = (e) => {
    if (theme === "Dark Mode") {
      // set the theme to light mode
      document.documentElement.className = "dark";
      setTheme("Light Mode");
    } else {
      // set the theme to dark mode
      document.documentElement.className = "light";
      setTheme("Dark Mode");
    }
  };

  return (
    <nav>
      <div className='navWrapper'>
        <h1 className='navTitle'>Where in the world?</h1>
        <div>
          <button
            type='button'
            className='themeBtn'
            onClick={() => handleTheme(theme)}
          >
            {theme === "Dark Mode" ? (
              <FontAwesomeIcon icon={farFaMoon} />
            ) : (
              <FontAwesomeIcon icon={fasFaMoon} />
            )}
            <span>{theme}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
