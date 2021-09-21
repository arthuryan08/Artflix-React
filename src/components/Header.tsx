import React from "react";
import Logo from "../assets/images/logo.png";

import "../styles/Header.scss";
type HideMenuTypes = {
  hideMenu?: Boolean;
};

export function Header({ hideMenu }: HideMenuTypes) {
  return (
    <header className="header">
      <img src={Logo} alt="Artflix logo" />
      {!hideMenu && (
        <ul className="menu-list">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Séries</a>
          </li>
          <li>
            <a href="#">Filmes</a>
          </li>
          <li>
            <a href="#">Mais Recentes</a>
          </li>
          <li>
            <a href="#">Minha Lista</a>
          </li>
        </ul>
      )}
    </header>
  );
}
