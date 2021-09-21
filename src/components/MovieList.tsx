import React from "react";
import '../styles/MovieList.scss'
import { Movie } from "./Movie";

type MovieListTypes = {
  handleShowModal: () => void;
  movies: Array<{}>;
}

export function MovieList({ handleShowModal , movies } : MovieListTypes) {

  return (
    <div className="main-content">
      <section>
        <div className="container">
          <h1>Populares da Netflix</h1>
          <div className="content">
            <ul className="movie-list">
              {movies.map((movie) => (<Movie handleShowModal={handleShowModal} movie={movie}/>))
              }
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
