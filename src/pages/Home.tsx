import React, { useEffect, useState } from "react";
import { BiShuffle } from "react-icons/bi";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Modal } from "../components/Modal";
import { MovieList } from "../components/MovieList";
import api from '../services/api.json';

export function Home() {
  const [showModal, setShowModal] = useState(false)

  const movies = api
  
  function handleShowModal(){
    setShowModal(!showModal)
  }
  
  console.log(movies)
  return (
    <div>
      {showModal ? <Modal handleShowModal={handleShowModal} movies={movies} /> : null}
      <Header />
      <Hero />
      <MovieList handleShowModal={handleShowModal} movies={movies} />
    </div>
  );
}
