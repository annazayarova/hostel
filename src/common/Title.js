import styled from 'styled-components';
import React from 'react';

const Title = ({ offset, text }) => {
    return (
        <Root>
            <Text offset={ offset }>
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
    white-space: nowrap;
    font-size: 14px;
    letter-spacing: 1px;
    width: 125px;
    margin: ${ props => props.offset ? props.offset : '140px' } 0 0;
    padding: 0;
    transform: rotate(-90deg);
    text-transform: uppercase;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        transform: rotate(0deg);
        margin: 60px 0 0 0;
    }
`;
