import React from "react";
import HeroCapa from "../assets/images/capa-filme.png";
import HeroNome from "../assets/images/diabo-de-cada-dia.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import "../styles/Modal.scss";
import { BiPlay } from "react-icons/bi";

export function Modal() {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-hero">
          <img src={HeroNome} alt="nome" />
          <div className="btn-hero">
            <button>
              <BiPlay />
              Assistir
            </button>
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
          <div className="description">
            <section>
              <p>
                Pregadores Profanos. Autoridades Corruptas. Amantes Assassinos.
                Numa cidade cheia de pecadores, um jovem busca justiça.
              </p>
            </section>
            <aside>
              <p>
                Elenco:
                <text>
                  {" "}
                  Arthur Yan, Roxana Meireles, Tom Holland, Tobey Maguire.
                </text>
              </p>
              <p>
                Gênero:<text> Ação, Romance, Terror.</text>
              </p>
              <p>
                Cenas e momentos:<text> Violento.</text>
              </p>
            </aside>
          </div>
          <div className="modal-eps">
            <div className="ep-selector">
              <h1>Episódios</h1>
              <select>
                <option value="1">Temporada 1</option>
                <option value="2">Temporada 2</option>
                <option value="3">Temporada 3</option>
              </select>
            </div>
            <ul>
              <li>
                <h1>1</h1>
                <img src={HeroCapa} alt="ícone do episódio" />
                <div>
                  <h3>Título primeiro</h3>
                  <span>45min</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident inventore quae nihil eum odio laborum!
                  </p>
                </div>
              </li>
              <li>
                <h1>1</h1>
                <img src={HeroCapa} alt="ícone do episódio" />
                <div>
                  <h3>Título primeiro</h3>
                  <span>45min</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident inventore quae nihil eum odio laborum!
                  </p>
                </div>
              </li>
              <li>
                <h1>1</h1>
                <img src={HeroCapa} alt="ícone do episódio" />
                <div>
                  <h3>Título primeiro</h3>
                  <span>45min</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident inventore quae nihil eum odio laborum!
                  </p>
                </div>
              </li>
              <li>
                <h1>1</h1>
                <img src={HeroCapa} alt="ícone do episódio" />
                <div>
                  <h3>Título primeiro</h3>
                  <span>45min</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident inventore quae nihil eum odio laborum!
                  </p>
                </div>
              </li>
              <li>
                <h1>1</h1>
                <img src={HeroCapa} alt="ícone do episódio" />
                <div>
                  <h3>Título primeiro</h3>
                  <span>45min</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident inventore quae nihil eum odio laborum!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
