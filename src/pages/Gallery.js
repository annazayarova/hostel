import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Img from '../common/Img';
import { ReactComponent as GalleryTitle } from '../img/gallery.svg';

import bath from '../img/gallery/mainPage/bath.jpg';
import kitchen from '../img/gallery/mainPage/kitchen.jpg';
import lounge from '../img/gallery/mainPage/lounge.jpg';
import rooms from '../img/gallery/mainPage/rooms.jpg';
import outdoor from '../img/gallery/outdoor/outdoor1.jpg';

const Gallery = () => {
    return (
        <Root>
            <StyledGalleryTitle />

            <Offset>

            <Container>
                <Col offsetLeft={ 16 }
                    width={ 25 }
                >
                    <Link to="/lounge">
                        <Title width={ 4.9 }>
                            Lounge
                        </Title>

                        <Img src={ lounge } />
                    </Link>
                </Col>

                <Col offsetLeft={ 20 }
                    offsetTop={ 4 }
                    width={ 20 }
                >
                    <Link to="/rooms">
                        <Title width={ 4.3 }>
                            Rooms
                        </Title>
                        <Img src={ rooms } />
                    </Link>
                </Col>
            </Container>

                <Container>
                    <Col offsetLeft={ 20 }
                        width={ 40 }
                    >
                        <Link to="/kitchen">
                            <Title width={ 7.7 }>
                                kitchen
                            </Title>

                            <Img src={ kitchen } />
                        </Link>
                    </Col>

                    <Col offsetLeft={ 10 }
                        width={ 20 }
                    >
                        <Link to="/bath">
                            <Title width={ 6.7 }>
                                bath
                            </Title>

                            <Img src={ bath } />
                        </Link>
                    </Col>
                </Container>

                <Container>
                    <Col offsetLeft={ 16 }
                        width={ 60 }
                    >
                        <Link to="/outdoor">
                            <Title width={ 10 }>
                                outdoor
                            </Title>

                            <Img src={ outdoor } />
                        </Link>
                    </Col>
                </Container>
                </Offset>
        </Root>
    );
}

export default Gallery;


const StyledGalleryTitle = styled(GalleryTitle)`
    height: 100vh;
    left: 0;
    position: sticky;
    top: 0;
    width: auto;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        display: none;
    }
`;

const Offset = styled.div`
    margin-top: calc(-100vh + 140px);

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-top: 0;
    }
`;

const Root = styled.div`
    background-color: #9BD9BC;
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 10px;
    }
`;

const Title = styled.div`
    position: absolute;
    z-index: 2;
    top: 5px;
    width: 100%;
    text-align: center;
    font-size: ${ ({ width }) => width }vw;
    text-transform: uppercase;
    font-family: ${ props => props.theme.fontFamily.primary };
    font-weight: bold;
    mix-blend-mode: difference;
    letter-spacing: 4px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        font-size: 14vw;
        justify-content: center;
    }
`;

const Container = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    padding-bottom: 140px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        flex-direction: column;
        padding-bottom: 0;
    }
`;

const Col = styled.div`
    margin-left: ${ ({ offsetLeft }) => offsetLeft }%;
    margin-top: ${ ({ offsetTop }) => offsetTop }%;
    position: relative;
    width: ${ ({ width }) => width }%;
    cursor: pointer;

    &:hover {
        ${ Title } {
            color: ${ ({ theme }) => theme.tertiaryColor };
            mix-blend-mode: inherit;
        }
    }

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 100%;
        margin-left: 0;
        margin-bottom: 10px;
    }
`;
