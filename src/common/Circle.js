import styled from 'styled-components';
import React from 'react';

const Circle = () => {
    return (
        <Svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="50"/>
        </Svg>
    );
}

export default Circle;

const Svg = styled.svg`
    width: 9vw;
    height: auto;
    fill: black;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        display: none;
    }
`;
