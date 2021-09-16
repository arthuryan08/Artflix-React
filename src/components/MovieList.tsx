import React from "react";
import '../styles/MovieList.scss'
import { Movie } from "./Movie";

export function MovieList() {
  return (
    <div className="main-content">
      <section>
        <div className="container">
          <h1>Populares da Netflix</h1>
          <div className="content">
            <ul className="movie-list">
              <Movie/>
              <Movie/>
              <Movie/>
              <Movie/>
              <Movie/>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
