import React from 'react';
import styled from 'styled-components';

import Text from '../common/Text';

const Gallery = () => {
    return (
        <Root>
            <StyledText> is coming soon...</StyledText>
            <TitleWrapper>
                gallery
            </TitleWrapper>
    </Root>
    );
}

export default Gallery;

const Content = styled.div`
    margin: calc(-100vh + 60px) auto 60px;
    width: 100%;
`;

const FlexEnd = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const FlexStart = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const Img = styled.img`
    width: ${ ({ width }) => `${ width }%` };
    padding: 5px;
`;

const Block = styled.div`
    width: 100%;
`;

const Root = styled.div`
    background: #FDBA53;
    height: auto;
    position: relative;
    width: 100%;
`;

const TitleWrapper = styled.div`
    width: 100%;
    height: 100vh;
    font-weight: bold;
    position: sticky;
    font-size: 15vw;
    text-transform: uppercase;
    -webkit-text-stroke: 2px black;
    text-stroke: 2px black;
    -webkit-text-fill-color: rgb(0,0,0,0);
    text-fill-color: rgb(0,0,0,0);
    top: 0;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledText = styled(Text)`
    padding-top: 40px;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
`;
