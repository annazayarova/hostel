import React from 'react';
import styled from 'styled-components';

import Img from '../../common/Img';
import Text from '../../common/Text';

import { ReactComponent as GalleryTitle } from '../../img/gallery.svg';

import lounge3 from '../../img/gallery/lounge/3.JPG';
import lounge5 from '../../img/gallery/lounge/5.JPG';
import lounge6 from '../../img/gallery/lounge/6.JPG';
import lounge7 from '../../img/gallery/lounge/7.JPG';
import lounge8 from '../../img/gallery/lounge/8.JPG';
import lounge10 from '../../img/gallery/lounge/10.JPG';

const Lounge = () => {
    return (
        <Root>
            <StyledGalleryTitle />

           <Container>
                    <Col offsetLeft={ 20 }
                        width={ 70 }
                    >
                    <Text>
                        Lounge
                    </Text>

                        <Img src={ lounge3 } />
                    </Col>

                    <Col offsetLeft={ 30 }
                        width={ 60 }
                    >
                        <Img src={ lounge5 } />
                    </Col>

                    <Col offsetLeft={ 40 }
                        width={ 50 }
                    >
                        <Img src={ lounge6 } />
                    </Col>

                    <Col offsetLeft={ 10 }
                        width={ 90 }
                    >
                        <Img src={ lounge7 } />
                    </Col>

                    <Col offsetLeft={ 10 }
                        width={ 80 }
                    >
                        <Img src={ lounge8 } />
                    </Col>

                    <Col offsetLeft={ 10 }
                        width={ 60 }
                    >
                        <Img src={ lounge10 } />
                    </Col>
                </Container>
        </Root>
    );
}

export default Lounge;

const Container = styled.div`
    width: 100%;
    position: relative;
    padding: 140px 0;

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
margin-bottom: 40px;

@media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 10px;
}
`;

const Root = styled.div`
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 10px;
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
