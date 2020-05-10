import React from 'react';
import styled from 'styled-components';

import Logo from '../common/Logo';
import Social from '../common/Social';
import Transition from '../common/Transition'

const Home = () => {
    return (
        <Root id="home">
            <Logo />

            <TopTransition text="backpakers" />

            <BottomTransition text="sunny limassol cyprus" />

            <MiddleTransition fontSize='26px'
                mobileFontSize='18px'
                transform="inherit"
                text="Make yourself at home. Mi casa es su casa. Sentitevi come a casa vostra. Fais comme chez toi. Sinta-se em casa. Fühle sie sich wie zu hause."
            />

            <Social />
        </Root>
    );
}

export default Home;

const TopTransition = styled(Transition)`
    position: absolute;
    top: 0;
    color: ${ props => props.theme.primaryColorPelette.light };
    font-weight: bold;
`;

const BottomTransition = styled(Transition)`
    position: absolute;
    bottom: 0;
    color: ${ props => props.theme.primaryColorPelette.light };
    font-family: ${ props => props.theme.fontFamily.secondary };
`;

const MiddleTransition = styled(Transition)`
    position: absolute;
    top: 50%;
    height: 20px;
    line-height: 20px;
    margin-top: -47px;
    color: white;
    font-family: ${ props => props.theme.fontFamily.secondary };
    text-transform: uppercase;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-top: 0;
        top: 25vh;
    }
`;

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    width: 100%;
`;
