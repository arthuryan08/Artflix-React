import React, { useRef } from "react";
import "../styles/MovieList.scss";
import { Movie } from "./Movie";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

type MovieListTypes = {
  handleShowModal: () => void;
  movies: Array<{}>;
};

export function MovieList({ handleShowModal, movies }: MovieListTypes ) {
  const carousel = useRef<HTMLDivElement | null>(null);

  const handleLeftClick = (e: React.MouseEvent<HTMLElement> ) => {
    e.preventDefault();
    // carousel.current?.scrollLeft
  };

  const handleRightClick = (e: React.MouseEvent<HTMLElement> ) => {
    e.preventDefault();
    // carousel.current?.scrollLeft
  };

  return (
    <div className="main-content">
      <section>
        <div className="container" >
          <h1>Populares da Netflix</h1>
          <div className="content" ref={carousel}>
            <div className="carousel-buttons">
              <div className="button-left">
                <button onClick={handleLeftClick}>
                  <BsChevronCompactLeft />
                </button>
              </div>
              <div className="button-right">
                <button onClick={handleRightClick}>
                  <BsChevronCompactRight />
                </button>
              </div>
            </div>
            <ul className="movie-list" >
              {movies.map((movie) => (
                <Movie handleShowModal={handleShowModal} movie={movie} />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
