import React from "react";
import { Header } from "../components/Header";
import HeroTitle from "../assets/images/diabo-de-cada-dia.png";
import Top10 from "../assets/images/badge-top-10.png";
import "../styles/Home.scss";
import { BiPlay, BiInfoCircle } from "react-icons/bi";

export function Home() {
  return (
    <div>
      <Header />
      <div className="hero-capa">
        <div className="hero-infos">
          <img src={HeroTitle} alt="Titulo do filme" />
          <div className="top1">
            <img src={Top10} alt="Top 10" />
            <h1>Top 1 de hoje no Brasil</h1>
          </div>
          <p>
            Pregadores Profanos. Autoridades Corruptas. Amantes Assassinos. Numa
            cidade cheia de pecadores, um jovem busca justiça.
          </p>
          <div className="btn">
            <button>
              <BiPlay />
              Assistir
            </button>
            <button className="btn-info">
              <BiInfoCircle />
              Mais Informações
            </button>
          </div>
        </div>
      </div>
      <div className="main-content">
        <section>
          <div className='container'>
            <h1>Populares da Netflix</h1>
            <div className='content'>
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
