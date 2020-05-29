import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Pane } from "evergreen-ui";
import { useParams } from "react-router-dom";
import imageStar from "./../../assets/svg/star-solid.svg";
import { MovieContext } from "./../../App";
import {
  Navbar,
  Directed,
  Recommended,
  RelatedMovies,
  Starring,
  StyledHeading,
  StyledButton,
  Synopsis,
} from "./../../components";

const MainContainer = styled(Pane)`
  color: #fff;
  background-color: #000;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 1)
  );
  background-size: cover;
`;

const BodyContainer = styled(Pane)`
  display: flex;
  flex-flow: column wrap;
  padding: 2rem;
`;

const TitleMovie = styled(StyledHeading)`
  display: inline-block;
`;

const ScoreContainer = styled(Pane)`
  margin-left: 0.5rem;
  font-weight: bold;
  display: inline-block;
  position: relative;
  bottom: 10px;
  line-height: 3rem;
`;

const CategoryContainer = styled.span`
  background-color: rgba(255, 255, 255, 0.28);
  padding: 0.2rem 0.3rem;
  border-radius: 0.2rem;
`;

const WraperSynopsisContainer = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

function Details() {
  let { id } = useParams();
  const { movie } = useContext(MovieContext);

  console.log("Home page: ", movie);

  return (
    <>
      {movie && (
        <MainContainer>
          <Navbar />
          <BodyContainer>
            <Pane>
              <TitleMovie
                id="title"
                headingtype="title"
                fontSize="3rem"
                fontWeight="bold"
                lineHeight="3rem"
                paddingvalue="0.6rem 0"
              >
                {movie.Title}
              </TitleMovie>
              <ScoreContainer>
                <img src={imageStar} alt="Star icon" width="15px" />{" "}
                <span>{movie.imdbRating}</span>
              </ScoreContainer>
              <StyledHeading
                headingtype="info"
                fontSize="0.8rem"
                wordSpacing="0.3125rem"
                lineHeight="1.5rem"
              >
                {movie.Genre} • {movie.Runtime} • {movie.Year} •{" "}
                <CategoryContainer>{movie.Rated}</CategoryContainer>
              </StyledHeading>
              <StyledButton btntype="primary" appearance="primary">
                Watch now
              </StyledButton>
            </Pane>
            <WraperSynopsisContainer>
              <Synopsis synopsis={movie.Plot} />
              <Pane>
                <Directed directors={movie.Director.split(",")} />
              </Pane>
            </WraperSynopsisContainer>
            <Starring starring={movie.Actors.split(",")} />
          </BodyContainer>
        </MainContainer>
      )}
    </>
  );
}

export default Details;
