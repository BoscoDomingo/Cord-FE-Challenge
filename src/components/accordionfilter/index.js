import React, { useState } from "react";
import styled from 'styled-components';
import Checkbox from "../checkbox";

import * as colors from "../../colors";

export default function AccordionFilter({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => { setIsOpen(!isOpen); };

    return (
        <>
            {content ?
                <AccordionFilterWrapper>
                    <AccordionFilterButton onClick={() => handleOnClick()}>{isOpen ? "-" : "+"}
                        <AccordionFilterTitle>{title}</AccordionFilterTitle>
                    </AccordionFilterButton>
                    <AccordionFilterContent isOpen={isOpen}>
                        {content.map((element) => {
                            return <Checkbox key={element.id} id={element.id} name={element.name} checked={element.checked} label={element.name} onChange={() => {element.checked = !element.checked || false}} />
                        })}
                    </AccordionFilterContent>
                </AccordionFilterWrapper>
                : null}
        </>

    );
}

const AccordionFilterWrapper = styled.div`
    margin-bottom: 0px;
`

const AccordionFilterButton = styled.button`
    font-family: "Lato", sans-serif;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 35px;
    text-align: left;
    align-items: center;
    display: flex;
    &:hover {
        font-weight: bold;
    };
`

const AccordionFilterTitle = styled.span`
    margin-left: 10px;
    font-size: 20px;
    color: ${colors.fontColor};
`
const AccordionFilterContent = styled.div`
  ${({ isOpen }) =>
        !isOpen &&
        `display: none;
    `}
`;