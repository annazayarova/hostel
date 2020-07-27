import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as Book } from '../img/bookArc.svg';

const BookNow = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    },[]);

    return (
        <a rel="noopener noreferrer"
            href="https://portal.freetobook.com/reservations?w_id=18387&w_tkn=PnphNqqFb598EFvAX4DGTAGssUpLlCzUPDuS6FzkhZQqloMAMMWHklUwIjRkG" target="_blank"
        >
            <Root>
                <Rotate rotate={ scrollTop }>
                    <StyledBook />
                </Rotate>

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
    line-height: 12px;
    height: 90px;
    justify-content: center;
    opacity: 0;
    position: absolute;
    right: 0;
    text-transform: uppercase;
    top: 10px;
    visibility: hidden;
    width: 90px;
    font-weight: bold;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        font-size: 10px;
        height: 80px;
        opacity: 1;
        width: 80px;
    }
`;

const StyledBook = styled(Book)`
    width: 85px;
    visibility: visible;
    opacity: 1;
`;

const Rotate = styled.div`
    transform: rotate(${ props => props.rotate }deg);
    position: fixed;
    right: 20px;
    top: 0;
`;

const Root = styled.div`
    background-color: transparent;
    color: black;
    cursor: pointer;
    position: fixed;
    right: 20px;
    top: 0;
    z-index: 20;

    :hover {
        ${ Hover } {
            background-color: black;
            animation: ${ gelatine } 0.5s;
            opacity: 1;
            visibility: visible;
        }

        ${ StyledBook } {
            opacity: 0;
            visibility: hidden;
        }
    }

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        position: fixed;
        right: 10px;
        top: 0;

        ${ Hover } {
            background-color: black;
            animation: ${ gelatine } 0.5s;
            opacity: 1;
            visibility: visible;
        }

        ${ StyledBook } {
            opacity: 0;
            visibility: hidden;
        }
    }
`;
