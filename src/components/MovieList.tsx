import { type } from "os";
import React, { ReactNode, useState } from "react";
import '../styles/MovieList.scss'
import { Movie } from "./Movie";


export function MovieList() {
const [showModal, setShowModal] = useState(false)

function handleShowModal(){
  setShowModal(!showModal)
}

  return (
    <div className="main-content">
      <section>
        <div className="container">
          <h1>Populares da Netflix</h1>
          <div className="content">
            <ul className="movie-list">
              <Movie handleShowModal={handleShowModal} showModal={showModal}/>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
