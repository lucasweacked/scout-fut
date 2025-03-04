import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode") === "true";
    setIsDarkMode(savedTheme);
    document.body.classList.toggle("light-mode", !savedTheme);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("isDarkMode", String(newMode));
      document.body.classList.toggle("dark-mode", newMode);
      document.body.classList.toggle("light-mode", !newMode);
      return newMode;
    });
  };
  return (
    <>
      <header className="cabecalho">
        <section className="cabecalho__conteudo">
          <section className="cabecalho__conteudo-esquerda">
            <section className="cabecalho__conteudo__logo">
              <i className="ri-football-fill" />
              <h1 className="cabecalho__conteudo__logo__titulo">ScoutFut</h1>
            </section>

            <ul className="cabecalho__conteudo__link">
              <li className="cabecalho__conteudo__link_links">
                <a href="#">PLAYERS</a>
              </li>
              <li className="cabecalho__conteudo__link_links">
                <a href="#">TEAMS</a>
              </li>
              <li className="cabecalho__conteudo__link_links">
                <a href="#">SQUADS</a>
              </li>
            </ul>
          </section>

          <section className="cabecalho__conteudo-direita">
            <button className="cabecalho__conteudo__botao-config">
              <i className="ri-settings-4-fill" />
            </button>
            <button
              className="cabecalho__conteudo__botao-theme"
              onClick={toggleTheme}
            >
              <i className={isDarkMode ? "ri-sun-fill" : "ri-moon-fill"} />
            </button>
          </section>
        </section>
      </header>
    </>
  );
}
