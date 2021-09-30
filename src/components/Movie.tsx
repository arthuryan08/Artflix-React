import React from "react";
import { AiFillPlayCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { HiThumbUp, HiThumbDown } from "react-icons/hi";
import Filme1 from "../assets/filmes/alive.jpg";

type MovieProps = {
  handleShowModal: () => void;
  movie: any;
};


export function Movie({ handleShowModal, movie } : MovieProps) {

  return (
  <>
    <li onClick={handleShowModal} className="movie">
      <img src={movie.thumb} alt="Filme 1" />
      <div className="movie-info">
        <div className="buttons">
          <span className='play-button'>
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
          <span>{movie.titulo}</span>
        </p>
      </div>
    </li>
    </>
  );
}
