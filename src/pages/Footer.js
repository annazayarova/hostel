import React from 'react';
import styled from 'styled-components';
import smoothscroll from 'smoothscroll-polyfill';

import { ReactComponent as Arrow } from '../img/flash.svg';
import { ReactComponent as Pot } from '../img/pot.svg';

const Footer = () => {
    const handleScrollTop = () => {
        smoothscroll.polyfill();
        window.scrollTo(0,0);
    };

    return (
        <Root>
            <Square>
                <StyledPot />
                <CopyrightLeft>&copy; 2020 Lemo</CopyrightLeft>
            </Square>

            <StyledSquare onClick={ handleScrollTop }>
                <StyledArrow />
                <CopyrightRight>ngass Hostel</CopyrightRight>
            </StyledSquare>
        </Root>
    );
}

export default Footer;

const CopyrightLeft = styled.span`
    color: #DC2C6F;
    position: absolute;
    right: 0;
    font-size: 14px;
    bottom: 10px;
    font-family: ${ props => props.theme.fontFamily.primary };
    letter-spacing: 0.75px;
    font-weight: bold;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        bottom: 3px;
        font-size: 10px;
    }
`;

const CopyrightRight = styled.span`
    color: #FDBA53;
    position: absolute;
    left: 1px;
    font-size: 14px;
    bottom: 10px;
    font-family: ${ props => props.theme.fontFamily.primary };
    font-weight: bold;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        bottom: 3px;
        font-size: 10px;
    }
`;

const Root = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    align-items: flex-end;
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
