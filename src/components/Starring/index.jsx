import React from "react";
import { Pane, Avatar } from "evergreen-ui";
import styled from "styled-components";
import StyledHeading from "./../StyledHeading";

const StarringMovieList = styled(Pane)`
  display: flex;
  flex-flow: row wrap;
`;

const StarringMovie = styled(Pane)`
  width: 7.5rem;
  margin: 0.3rem 0.9rem;
  text-align: center;
  &:hover {
    transform: scale(1.2);
  }
`;

const handleRandomValue = () => {
  return Math.floor(Math.random() * 30);
};

function Starring({ starring }) {
  return (
    <>
      <StyledHeading fontSize="1.1rem" paddingvalue="3rem 0 1rem 0">
        Starring
      </StyledHeading>
      <StarringMovieList>
        {starring.map((star) => (
          <StarringMovie key={star}>
            <Avatar src={star} name={star} size={100} />
            <StyledHeading fontSize="0.9rem">{star}</StyledHeading>
            <StyledHeading fontSize="0.6rem">
              {handleRandomValue()} Movies
            </StyledHeading>
          </StarringMovie>
        ))}
      </StarringMovieList>
    </>
  );
}

export default Starring;
