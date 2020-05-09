import React from 'react';
import styled, { keyframes } from 'styled-components';

import ArcText from './ArcText';

const BookNow = () => {
    return (
        <a href="https://portal.freetobook.com/reservations?w_id=18387&w_tkn=PnphNqqFb598EFvAX4DGTAGssUpLlCzUPDuS6FzkhZQqloMAMMWHklUwIjRkG" target="_blank">
            <Root>
                <Book text="book now book now" arc={ 340 } radius={ 41 } />
                <Hover>book now</Hover>
            </Root>
        </a>
    );
};
export default BookNow;

const gelatine = keyframes`
from, to { transform: scale(1); }
    25% { transform: scale(0.9); }
    50% { transform: scale(1.1); }
    75% { transform: scale(0.95); }
`;

const Hover = styled.div`
    align-items: center;
    background-color: transparent;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: fixed;
    font-size: 12px;
    height: 100px;
    justify-content: center;
    opacity: 0;
    position: absolute;
    right: -50px;
    text-transform: uppercase;
    top: 0;
    visibility: hidden;
    white-space: nowrap;
    width: 100px;
    font-weight: bold;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        font-size: 10px;
        height: 80px;
        opacity: 1;
        width: 80px;
    }

`;

const Book = styled(ArcText)`
    visibility: visible;
    opacity: 1;
`;

const Root = styled.div`
    border-radius: 50%;
    background-color: transparent;
    color: black;
    cursor: pointer;
    position: fixed;
    right: 60px;
    top: 20px;
    z-index: 20;

    :hover {
        ${ Hover } {
            background-color: black;
            animation: ${ gelatine } 0.5s;
            opacity: 1;
            visibility: visible;
        }

        ${ Book } {
            opacity: 0;
            visibility: hidden;
        }
    }

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        position: fixed;
        right: 60px;
        top: 10px;

        ${ Hover } {
            background-color: black;
            animation: ${ gelatine } 0.5s;
            opacity: 1;
            visibility: visible;
        }

        ${ Book } {
            opacity: 0;
            visibility: hidden;
        }
    }
`;
