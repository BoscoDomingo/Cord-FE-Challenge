import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";

export default function MovieItem({ movie, genres }) {
    const postersBaseURL = "https://image.tmdb.org/t/p/w500";

    let genreNames = [];
    for (let id of movie.genre_ids) {
        genreNames.push(genres.find(genre => genre.id === id).name);
    }

    return (
        // TODO: Complete the MovieItem component - DONE
        <MovieItemWrapper>
            <LeftCont>
                <MoviePoster src={`${postersBaseURL}${movie.poster_path}`} alt={movie.title} />
            </LeftCont>
            <RightCont>
                <Rating><RatingText>{movie.vote_average}</RatingText></Rating>
                <Title>{movie.title}</Title>
                <Genres>{genreNames.join(" | ")}</Genres>
                <Summary>{movie.overview}</Summary>
                <ReleaseDate>{movie.release_date}</ReleaseDate>
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
`;

const LeftCont = styled.div`
  display: inline-block;
`;

const RightCont = styled.div`
  display: inline-block;
  align-items: left;
  margin: 0 0 0 20px;
`;

const MoviePoster = styled.img`
    height: auto;
    width: 200px;
    object-fit: cover;
`;

const Rating = styled.div`
    display: flex;
    border-radius: 5px;
    float: right;
    align-items: center;
    background-color: ${colors.primaryColor};
    color: #ffffff;
    padding: 5px 10px;
`;

const RatingText = styled.h3`
    margin: 0 0;
    align-text:center;
`;
const Title = styled.h2`
    margin: 0 auto;
`;

const Genres = styled.h4`
  color: ${colors.primaryColor};
  margin: 8px auto;
`;

const Summary = styled.p`
    font-weight: bold;
`;

const ReleaseDate = styled.p`
  color: ${colors.primaryColor};
  bottom: 5px;
  position: absolute;
`;