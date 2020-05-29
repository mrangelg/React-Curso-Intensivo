import React, { useContext } from "react";
import styled from "styled-components";
import { Button, Pane } from "evergreen-ui";
import { StyledHeading, Navbar } from "../../components";
import { MovieContext } from "./../../App";

const Container = styled(Pane)`
  text-align: center;
`;

const Imagen = styled.img`
  border-radius: 0.5em;
  margin-bottom: 1.25rem;
  width: 15.625rem;
  height: 23.125rem;
`;

function TVSeries() {
  const { movie, handleChange } = useContext(MovieContext);

  const handleRandomMovie = () => {
    const arrayTitleMovies = [
      "Iron man",
      "Iron man 2",
      "Iron man 3",
      "Avengers",
      "Hulk",
      "Thor",
      "Ant man",
      "Deadpool",
      "Wonder Woman",
    ];
    const titleMovie =
      arrayTitleMovies[Math.floor(Math.random() * arrayTitleMovies.length)];

    const URL = "http://www.omdbapi.com/?apikey=5c24385e";
    fetch(URL + `&t=${titleMovie}`)
      .then((response) => response.json())
      .then((movie) => handleChange(movie))
      .catch((error) =>
        console.log("Failed fetch on TVSerie component: ", error)
      );
  };

  console.log("TVSeries movie: ", movie, typeof movie);

  return (
    <>
      <Navbar />
      <Container>
        <StyledHeading
          textAlign="center"
          fontSize="30px"
          padding="50px"
          textTransform="capitalize"
        >
          {movie ? movie.Title : "Page under construction"}
        </StyledHeading>
        {movie.Poster !== "N/A" && (
          <div>
            <Imagen src={movie.Poster} alt={movie.Title} />
          </div>
        )}
        <Button
          onClick={handleRandomMovie}
          appearance="primary"
          intent="success"
        >
          Change movie
        </Button>
      </Container>
    </>
  );
}

export default TVSeries;
