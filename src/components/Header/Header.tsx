import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleTheme() {
    setIsDarkMode((prevMode) => !prevMode);
  }
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
