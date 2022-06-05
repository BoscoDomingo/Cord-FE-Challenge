import React from "react";
import styled, { css } from 'styled-components';

import * as colors from "../../colors";
import AccordionFilter from "../accordionfilter";
import SearchBar from "../../components/searchbar";

import SearchIcon from "../../images/search-icon-yellow.png";
import YearIcon from "../../images/year-icon.png";

export default function SearchFilters({ genres, ratings, languages, onSearch }) {
    const [keyword, setKeyword] = React.useState('');
    const [year, setYear] = React.useState(0);

    const handleOnChange = (value => { //useEffect caused an infinite loop
        // Better than repeating code in each onChange, but causes incorrect search
        if (typeof value === 'string') {
            setKeyword(value);
        } else if (typeof value === 'number') {
            setYear(value);
        }
        onSearch(keyword, year);
    });

    return (
        <FiltersWrapper>
            <SearchFiltersCont className="search_inputs_cont" marginBottom>
                <SearchBar
                    id="keyword_search_input"
                    type="text"
                    icon={{ src: SearchIcon, alt: 'Magnifying glass' }}
                    placeholder="Search for movies"
                    onChange={handleOnChange}
                />
                <SearchBar
                    id="year_search_input"
                    type="number"
                    icon={{ src: YearIcon, alt: 'Calendar icon' }}
                    placeholder="Year of release"
                    onChange={handleOnChange}
                />
            </SearchFiltersCont>
            <SearchFiltersCont>
                <CategoryTitle>Movies</CategoryTitle>
                {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories - DONE */}
                <AccordionFilter title="Select genre(s)" content={genres} />
                <AccordionFilter title="Select min. vote" content={ratings} />
                <AccordionFilter title="Select language" content={languages} />
            </SearchFiltersCont>
        </FiltersWrapper>
    );
}

const FiltersWrapper = styled.div`
  position: relative;
`

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all .3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
`

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
  color: ${colors.fontColor};
`