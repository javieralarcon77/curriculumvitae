import React from 'react';
import styled from 'styled-components';
import colors from './Colors';

const StyledH2 = styled.h2`
    font-familiy: 'Roboto', sans-serif;
    font-weight: 300;
    letter-spacing: .8px;
    margin: 1em 0 0 0;
    color: ${ colors.primary };
`;

const H2Styled = ({ children }) => <StyledH2>{ children }</StyledH2>;

export default H2Styled;