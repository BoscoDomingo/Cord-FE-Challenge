import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";
import * as fetcher from "../../fetcher";

import SearchFilters from "../../components/searchfilter";
import MovieList from "../../components/movielist";

export default class Discover extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: '',
            year: 0,
            results: [],
            totalCount: 0,
            genreOptions: [],
            ratingOptions: [
                { id: 7.5, name: 7.5 },
                { id: 8, name: 8 },
                { id: 8.5, name: 8.5 },
                { id: 9, name: 9 },
                { id: 9.5, name: 9.5 },
                { id: 10, name: 10 }
            ],
            languageOptions: [
                { id: 'GR', name: 'Greek' },
                { id: 'EN', name: 'English' },
                { id: 'RU', name: 'Russian' },
                { id: 'PO', name: 'Polish' }
            ],
            isLoading: false,
        };
    }

    // TODO: Preload and set the popular movies and movie genres when page loads - DONE
    componentDidMount() {
        this.setState({ isLoading: true });
        let resolvedPromises = Promise.all([fetcher.fetchPopularMovies(), fetcher.fetchMovieGenres()]);
        resolvedPromises.then(([popularMovies, movieGenres]) => {
            this.setState({
                results: popularMovies.results,
                totalCount: popularMovies.total_results,
                genreOptions: movieGenres,
                isLoading: false,
            });
        }).catch(error => {
            console.error(error);
        });
    };

    // TODO: Update search results based on the keyword and year inputs

    render() {
        const { genreOptions, languageOptions, ratingOptions, totalCount, results } = this.state;

        return (
            <DiscoverWrapper>
                <MobilePageTitle>Discover</MobilePageTitle> {/* MobilePageTitle should become visible on mobile devices via CSS media queries*/}
                <TotalCount>{totalCount} results</TotalCount>
                <MovieFilters>
                    <SearchFilters
                        genres={genreOptions}
                        ratings={ratingOptions}
                        languages={languageOptions}
                        searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
                    />
                </MovieFilters>
                <MovieResults>
                    {this.state.isLoading ?
                        <>
                            {/* This could be a proper loading screen with an animation*/}
                            Loading...
                        </> :
                        <MovieList
                            movies={results || []}
                            genres={genreOptions || []}
                        />
                    }
                </MovieResults>
            </DiscoverWrapper>
        )
    }
}

const DiscoverWrapper = styled.main`
  padding: 35px;
`

const MovieResults = styled.div`
  display: inline-block;
  width: calc(100% - 295px);
`

const MovieFilters = styled.div`
  width: 280px;
  float: right;
  margin-top: 15px;
`

const MobilePageTitle = styled.h1`
  display: none;
`

const TotalCount = styled.strong`
  display: block;
`