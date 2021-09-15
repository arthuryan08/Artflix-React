import React from "react";
import HeroCapa from "../assets/images/capa-filme.png";
import HeroNome from "../assets/images/diabo-de-cada-dia.png";
import { AiFillPlayCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import '../styles/Modal.scss'
import { BiPlay } from "react-icons/bi";

export function Modal() {
  return (
    <div className="fundao">
    <div className="modal">
      <div className="modal-content">
        <div className="modal-hero">
          <img src={HeroNome} alt="nome" />
          <div className="btn-hero">
            <button><BiPlay />Assistir</button>
            <span>
              <a href="#">
                <AiFillPlayCircle />
              </a>
            </span>
            <span>
              <a href="#">
                <HiThumbUp />
              </a>
            </span>
            <span>
              <a href="#">
                <HiThumbDown />
              </a>
            </span>
          </div>
        </div>
        <div className="modal-infos">
          <section>
            <p>
              Pregadores Profanos. Autoridades Corruptas. Amantes Assassinos. Numa
              cidade cheia de pecadores, um jovem busca justiça.
            </p>
          </section>
          <aside>
            <p>
              Elenco:<text> Arthur Yan, Roxana Meireles, Tom Holland, Tobey Maguire.</text>
            </p>
            <p>
              Gênero:<text> Ação, Romance, Terror.</text>
            </p>
            <p>
              Cenas e momentos:<text> Violento.</text>
            </p>
          </aside>
        </div>
      </div>
    </div>
    </div>
  );
}
