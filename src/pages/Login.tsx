import React from "react";
import FacebookLogo from "../assets/images/facebook.png";
import { Header } from "../components/Header";

import "../styles/Login.scss";

export function Login() {
  return (
    <div className="background">
      <Header />
      <div className="login-container">
        <h2>Entrar</h2>
        <form>
          <input type="text" placeholder="Email ou número de telefone" />
          <input type="password" placeholder="Senha" />
          <button>Entrar</button>
          <div className="check">
            <div>
              <input type="checkbox" className="checkbox" />
              <label>Lembrar de mim</label>
            </div>
            <span>Precisa de ajuda?</span>
          </div>
          <div className="infos">
            <div>
              <img src={FacebookLogo} alt="Facebook Logo" />
              <span>Conectar com o Facebook</span>
            </div>
            <p>
              Novo por aqui? <strong>Assine agora</strong>
            </p>
            <div>
              <p>
                Está página é protegida pelo Google reCAPTCHA para garantir que
                você não é um robô.
              </p>
              <a href=""> Saiba mais.</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
