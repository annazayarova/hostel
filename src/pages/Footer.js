import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Arrow } from '../img/flash.svg';
import { ReactComponent as Pot } from '../img/pot.svg';

const Footer = () => {
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Root>
            <Square>
                <StyledPot />
            </Square>

            <StyledSquare onClick={ handleScrollTop }>
                <StyledArrow />
            </StyledSquare>
        </Root>
    );
}

export default Footer;

const Root = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-end;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        flex-direction: column;
    }
`;

const Square = styled.div`
    position: relative;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FDBA53;

    :after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 100%;
    }
`;

const StyledArrow = styled(Arrow)`
`;

const StyledSquare = styled(Square)`
    background-color: #DC2C6F;
    cursor: pointer;

    ${ StyledArrow } {
        width: 70%;
        height: 70%;
        opacity: 0.4;
        transition: transform .6s ease-in-out;
    }

    :hover {
        ${ StyledArrow } {
            opacity: 1;
        }
    }
`;

const StyledPot = styled(Pot)`
    width: 60%;
    height: 60%;
`;
