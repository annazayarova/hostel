import styled from 'styled-components';
import React from 'react';

const Title = ({ text }) => {
    return (
        <Root>
            <Text>
                { text }
            </Text>
        </Root>
    );
}

export default Title;

const Root = styled.div`
    align-self: flex-start;
    position: sticky;
    top: 0;
    display: flex;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        position: relative;
    }
`;

const Text = styled.h1`
    color: black;
    font-weight: bold;
    width: 125px;
    font-size: 14px;
    letter-spacing: 1px;
    margin: 135px 0 0 0;
    padding: 0;
    transform: rotate(-90deg);
    text-transform: uppercase;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        transform: rotate(0deg);
        margin: 40px 0 0 0;
    }
`;
