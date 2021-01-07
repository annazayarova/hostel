import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Img from '../../common/Img';
import Text from '../../common/Text';

import { ReactComponent as GalleryTitle } from '../../img/gallery.svg';

const GalleryContainer = ({ title, images }) => {
    return (
        <Root>
            <StyledGalleryTitle />

            <Container>
                <Col>
                    <Header>
                        <Text>
                            { title }
                        </Text>
                    </Header>

                    { images.map(image => <StyledImg src={ image } />) }
                </Col>
            </Container>

            <Footer>
                <Link to='/'><Close/></Link>
            </Footer>
        </Root>
    );
}

export default GalleryContainer;

const Header = styled.div`
    padding: 50px 0 10px;
`;

const Footer = styled.div`
    padding: 40px 0 50px;
`;

const StyledImg = styled(Img)`
    margin-bottom: 20px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-bottom: 10px;
    }
`;

const Container = styled.div`
    position: relative;
    padding: 0 140px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 0;
    }
`;

const Col = styled.div`
    margin: 0 8%;
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin: 0;
    }
`;

const Root = styled.div`
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 0 10px;
    }
`;

const StyledGalleryTitle = styled(GalleryTitle)`
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: auto;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        display: none;
    }
`;

const Close = styled.div`
    position: fixed;
    left: 50%;
    margin-left: -16px;
    bottom: 40px;
    width: 30px;
    height: 30px;

    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 30px;
        width: 6px;
        background-color: ${ ({ theme })=> theme.tertiaryColor };
    }

    &:before {
        transform: rotate(45deg);
    }

    &:after {
        transform: rotate(-45deg);
    }
`;
