import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { ReactComponent as LogoOriginal } from '../img/logo.svg';
import { ReactComponent as LogoPot } from '../img/logo_pot.svg';
import { ReactComponent as LogoCat } from '../img/logo_cat.svg';

const logos = [
    <LogoOriginal />,
    <LogoPot />,
    <LogoCat />
];

const Logo = () => {
    const [ currentImage, setCurrentImage ] = useState(logos[0]);

    useEffect(() => {
        const timeout0 = setInterval(() => setCurrentImage(logos[0]), 1000);
        const timeout1 = setInterval(() => setCurrentImage(logos[1]), 2000);
        const timeout2 = setInterval(() => setCurrentImage(logos[2]), 3000);

        return () => {
            clearTimeout(timeout0);
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };

    }, [ ]);

    return (
        <Root>
            { currentImage }
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
