import React from 'react';
import Logo from "../assets/images/logo.png";

import "../styles/Header.scss";

export function Header(){
    return(
        <header className="header">
        <img src={Logo} alt="Artflix logo" />
      </header>
    )
}