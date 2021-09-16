import React from "react";
import { AiFillPlayCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import Filme1 from "../assets/filmes/alive.jpg";

export function Movie() {
  return (
    <li className="movie">
      <img src={Filme1} alt="Filme 1" />
      <div className="movie-info">
        <div className="buttons">
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
          <span>
            <a href="#">
              <AiOutlinePlusCircle />
            </a>
          </span>
        </div>
        <p>
          T2:EP6 <text>"Meu Episódio"</text>
        </p>
      </div>
    </li>
  );
}
