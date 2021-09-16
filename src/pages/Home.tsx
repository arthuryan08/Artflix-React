import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { MovieList } from "../components/MovieList";

export function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <MovieList />
    </div>
  );
}
