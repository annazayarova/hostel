import React from 'react';
import styled, { keyframes } from 'styled-components';

import { ReactComponent as Facebook } from '../img/fb.svg'
import { ReactComponent as Instagram } from '../img/inst.svg'

const Social = () => {
    return (
        <Root>
            <Wrapper href="https://www.facebook.com/lemongrasshostel"
                target="_blank"
                rel="noopener noreferrer"
            >
                <StyledFacebook />
            </Wrapper>

            <Wrapper href="https://www.instagram.com/lemongrasshostel/" target="_blank">
                <StyledInstagram />
            </Wrapper>
        </Root>

    );
}

export default Social;

const gelatine = keyframes`
from, to { transform: scale(1); }
    25% { transform: scale(0.9); }
    50% { transform: scale(1.1); }
    75% { transform: scale(0.95); }
`;

const StyledFacebook = styled(Facebook)`
    width: 20px;

    path {
        fill: black
    }

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 15px;
    }
`;

const StyledInstagram = styled(Instagram)`
    width: 20px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 15px;
    }
`;

const Root = styled.div`
    position: absolute;
    left: 20px;
    bottom: 20px;
    display: flex;
    z-index: 100;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        left: 10px;
        bottom: 10px;
    }
`;

const Wrapper = styled.a`
    align-items: center;
    border-radius: 50%;
    border: 1px solid black;
    display: flex;
    height: 60px;
    justify-content: center;
    margin-right: 15px;
    width: 60px;

    :hover {
        animation: ${ gelatine } 0.5s;
        background: black;

    ${ StyledFacebook } {
        path {
            fill: white
        }
    }

    ${ StyledInstagram } {
        path {
            fill: white
        }
    }
}

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }
`;
