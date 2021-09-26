import React, { useEffect, useState } from "react";
import { BiShuffle } from "react-icons/bi";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Modal } from "../components/Modal";
import { MovieList } from "../components/MovieList";

export function Home() {
  const [showModal, setShowModal] = useState(false);
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/movies.json")
      .then((response) => response.json())
      .then(setMovies);
  }, []);

  function handleShowModal() {
    setShowModal(!showModal);
  }

  return (
    <div>
      {showModal ? (
        <Modal handleShowModal={handleShowModal} movies={movies} />
      ) : null}
      <Header />
      <Hero />
      {movies.slice(0, 4).map((movie) => (
        <MovieList handleShowModal={handleShowModal} movies={movies} />
      ))}
    </div>
  );
}
