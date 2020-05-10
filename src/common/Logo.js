import React from 'react';
import styled from 'styled-components';

import '../swiper.css';

import { ReactComponent as LogoOriginal } from '../img/logo.svg';
import { ReactComponent as LogoPot } from '../img/logo_pot.svg';
import { ReactComponent as LogoCat } from '../img/logo_cat.svg';

const Logo = () => {

    return (
        <Root>
            <LogoOriginal />
        </Root>
    );
};

export default Logo;

const Root = styled.div`
    width: 60%;
    margin-left: -10%;
    z-index: 10;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 95%;
        margin-left: -5%;
    }
`;
