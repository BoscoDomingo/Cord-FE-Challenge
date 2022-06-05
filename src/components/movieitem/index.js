import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";

export default function MovieItem({ movie, genres }) {
    const postersBaseURL = "https://image.tmdb.org/t/p/w500";
    console.log(movie.genre_ids, genres);

    let genreNames = [];
    for (let id of movie.genre_ids) {
        genreNames.push(genres.find(genre => genre.id === id).name);
    }

    console.log(genreNames)
    return (
        // TODO: Complete the MovieItem component
        <MovieItemWrapper>
            <LeftCont>
                <MoviePoster src={`${postersBaseURL}${movie.poster_path}`} alt={movie.title} />
            </LeftCont>
            <RightCont>
                <Title>{movie.title}</Title>
                <Genres>{genreNames.join(" | ")}</Genres>
                
                {/* Rating */}
                {/* Summary */}
                {/* Release date */}
            </RightCont>
        </MovieItemWrapper>
    )
}

const MovieItemWrapper = styled.div`
  position: relative;
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 15px 0;
  display: flex;
`

const LeftCont = styled.div`
  display: inline-block;
`

const RightCont = styled.div`
  display: inline-block;
  align-items: left;
`

const MoviePoster = styled.img`
    width: 35%;
    height: auto;
    object-fit: cover;
    `

const Title = styled.h2`
  font-size: 1.4;
`;

const Genres = styled.h4`
  font-size: 1;
  color: ${colors.primaryColor};
`;

const Summary = styled.p`

`;

const Rating = styled.div`
  font-size: 1.4;
  color: ${colors.primaryColor};
`;
const ReleaseDate = styled.p`
  font-size: 1.4;
`;