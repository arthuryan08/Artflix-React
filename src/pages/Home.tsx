import React from "react";
import { Header } from "../components/Header";
import { BiPlay, BiInfoCircle, BiPlayCircle } from "react-icons/bi";
import { AiFillPlayCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";

import HeroTitle from "../assets/images/diabo-de-cada-dia.png";
import Top10 from "../assets/images/badge-top-10.png";
import Filme1 from "../assets/filmes/alive.jpg"

import "../styles/Home.scss";

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
              <ul className='movie-list'>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <h1>Populares da Netflix</h1>
            <div className='content'>
              <ul className='movie-list'>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <h1>Populares da Netflix</h1>
            <div className='content'>
              <ul className='movie-list'>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
                <li className='movie'>
                  <img src={Filme1} alt="Filme 1" />
                  <div className='movie-info'>
                    <div className='buttons'>
                        <span>
                          <a href="#"><AiFillPlayCircle /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbUp /></a>
                        </span>
                        <span>
                          <a href="#"><HiThumbDown /></a>
                        </span>
                        <span>
                          <a href="#"><AiOutlinePlusCircle /></a>
                        </span>
                    </div>
                    <p>T2:EP6 <text>"Meu Episódio"</text></p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
