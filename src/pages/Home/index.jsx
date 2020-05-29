import React, { useContext } from "react";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { MovieContext } from "./../../App";
import {
  Navbar,
  MovieCategories,
  StyledButton,
  StyledHeading,
} from "./../../components";

const MainContainer = styled(Pane)`
  height: 100%;
  background-color: #000;
  background-image: ${(props) =>
    props.backgroundImage !== "N/A"
      ? `linear-gradient(
      to left,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.3) 50%
    ),
    url(${props.backgroundImage})`
      : `linear-gradient(
      to left,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.3) 50%
    )`};
  background-repeat: no-repeat;
  background-size: 100vh;
`;

const BodyContainer = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-end;
`;

const TrendingMovie = styled(Pane)`
  width: 100%;
  padding-left: 3rem;
  @media (min-width: 992px) {
    width: 40%;
  }
`;

const CategoriesContainer = styled(Pane)`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  @media (min-width: 992px) {
    width: 60%;
  }
`;

function Home() {
  const { movie } = useContext(MovieContext);

  console.log("Home page: ", movie);

  return (
    <>
      {movie && (
        <MainContainer backgroundImage={movie.Poster}>
          <Navbar />
          <BodyContainer>
            <TrendingMovie>
              <StyledHeading
                headingtype="subtitle"
                fontSize="1rem"
                letterSpacing="0.125rem"
              >
                Trending
              </StyledHeading>
              <StyledHeading
                headingtype="title"
                fontSize="3rem"
                fontWeight="bold"
                lineHeight="3rem"
                paddingvalue="0.6rem 0"
                textShadow="rgb(0,0,0) 0px 0px 40px"
              >
                {movie.Title}
              </StyledHeading>
              <StyledHeading
                headingtype="info"
                fontSize="0.8rem"
                wordSpacing="0.3125rem"
                lineHeight="1.5rem"
              >
                {movie.Genre} • {movie.Runtime}
              </StyledHeading>
              <StyledButton
                btntype="primary"
                appearance="primary"
                is={Link}
                to="#"
              >
                Watch now
              </StyledButton>
              <StyledButton
                btntype="secondary"
                appearance="primary"
                is={Link}
                to={`/movie/${slugify(movie.Title, {
                  lower: true,
                  strict: true,
                })}`}
              >
                More info
              </StyledButton>
            </TrendingMovie>
            <CategoriesContainer>
              <MovieCategories />
            </CategoriesContainer>
          </BodyContainer>
        </MainContainer>
      )}
    </>
  );
}

export default Home;
