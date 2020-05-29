import React, { createContext, useState } from "react";
import { Navigator } from "./navigations/Navigator";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const MovieContext = createContext();

function App() {
  const [movie, setMovie] = useState({
    Title: "Wonder Woman",
    Year: "2017",
    Genre: "Action, Adventure, Fantasy, Sci-Fi, War",
    Runtime: "141 min",
    Actors: "Gal Gadot, Chris Pine, Connie Nielsen, Robin Wright",
    Director: "Patty Jenkins",
    Rated: "PG-13",
    imdbRating: "7.4",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg",
    Plot:
      "When a pilot crashes and tells of conflict in the outside world, Diana, an Amazonian warrior in training, leaves home to fight a war, discovering her full powers and true destiny.",
  });

  const HandleChangeMovie = (movie) => {
    setMovie(movie);
    console.log("Function handleChange on App movie: ", movie);
  };

  console.log("App main");

  return (
    <Wrapper>
      <Provider store={store}>
        <MovieContext.Provider
          value={{
            movie,
            handleChange: HandleChangeMovie,
          }}
        >
          <Navigator />
        </MovieContext.Provider>
      </Provider>
    </Wrapper>
  );
}

export default App;
