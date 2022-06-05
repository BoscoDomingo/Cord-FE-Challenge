import React from "react";
import styled from 'styled-components';

import * as colors from "../../colors";

export default function Checkbox({ id, name, checked, label, onChange }) {
    // TODO: Style the component and checkmark to look like the mockup provided - DONE (kinda)
    return (
        <CheckboxContainer>
            <CheckboxInput type="checkbox" id={id} name={name} checked={checked} onChange={e => onChange(e.target.checked, label)} />
            <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
        </CheckboxContainer>
    )

}

const CheckboxContainer = styled.div`
  position: relative;
`;

const CheckboxInput = styled.input`
    border-radius: 5%;
    border: 1px solid ${colors.fontColor};
    cursor: pointer;
    margin: 10px 15px 10px 0;
    width: 20px;
    height: 20px;

`;

const CheckboxLabel = styled.label`
    color: ${colors.fontColor};
    font-size 15px;
    cursor: pointer;
`