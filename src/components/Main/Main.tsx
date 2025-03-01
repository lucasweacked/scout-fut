import "./Main.css";

export default function Main() {
  return (
    <>
      <main className="principal">
        <section className="principal__conteudo">
          <h2 className="principal__conteudo__titulo">
            Base de Dados de Jogadores
          </h2>
          <p className="principal__conteudo__paragrafo">
            Explore estatísticas detalhadas de jogadores de futebol
          </p>

          <section className="principal__conteudo__menu">
            <ul className="principal__conteudo__menu__link">
              <li className="principal__conteudo__menu__link_links">
                <a href="#">Trending</a>
              </li>
              <li className="principal__conteudo__menu__link_links">
                <a href="#">Added</a>
              </li>
              <li className="principal__conteudo__menu__link_links">
                <a href="#">Updated</a>
              </li>
              <li className="principal__conteudo__menu__link_links">
                <a href="#">Free</a>
              </li>
              <li className="principal__conteudo__menu__link_links">
                <a href="#">On loan</a>
              </li>
              <li className="principal__conteudo__menu__link_links">
                <a href="#">Removed</a>
              </li>
              <li className="principal__conteudo__menu__link_links">
                <a href="#">Random</a>
              </li>
            </ul>

            <section className="principal__conteudo__menu__search">
              <label
                htmlFor="buscar"
                className="principal__conteudo__menu__search-bar-label"
              >
                <i className="ri-search-line"></i>
              </label>
              <input
                type="text"
                name="buscar"
                id="buscar"
                className="principal__conteudo__menu__search-bar"
                placeholder="Buscar jogadores..."
              />
            </section>
          </section>
          <div className="faixa"></div>
        </section>
      </main>
    </>
  );
}
