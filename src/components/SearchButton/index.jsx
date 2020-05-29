import React, { useContext } from "react";
import { toaster } from "evergreen-ui";
import { MovieContext } from "./../../App";
import "./styles.scss";

function SearchButton() {
  const { movie, handleChange } = useContext(MovieContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const URL = "http://www.omdbapi.com/?apikey=5c24385e";
    const title = event.target[0].value;
    fetch(URL + `&t=${title}`)
      .then((response) => response.json())
      .then((movie) => {
        movie.Response === "True"
          ? handleChange(movie)
          : toaster.danger(`Not found "${title}" movie`, {
              id: "movie-not-found",
              duration: 2,
            });
      })
      .catch((error) =>
        console.log("Fail fetch on SearchButton component: ", error)
      );
    event.target.reset();
  };

  console.log("Search component: ", movie);

  return (
    <>
      <div>
        <form id="search-movie" onSubmit={handleSubmit}>
          <input type="search" placeholder="Search movie" />
        </form>
      </div>
    </>
  );
}

export default SearchButton;
