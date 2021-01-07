import React from 'react';
import styled from 'styled-components';

import Text from '../common/Text';

import img1 from '../img/gallery/1.jpg';

const Gallery = () => {
    return (
        <Root>
            <Content>
                <Block>
                    <FlexEnd>
                        <Img width={ 30 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />

                        <Img width={ 35 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />
                    </FlexEnd>

                    <FlexStart>
                        <Img width={ 60 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />

                        <Img width={ 25 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />
                    </FlexStart>
                </Block>

                <Block>
                    <FlexEnd>
                        <Img width={ 30 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />

                        <Img width={ 35 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />
                    </FlexEnd>

                    <FlexStart>
                        <Img width={ 55 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />

                        <Img width={ 25 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />
                    </FlexStart>
                </Block>

                <Block>
                    <FlexEnd>
                        <Img width={ 30 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />

                        <Img width={ 35 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />
                    </FlexEnd>

                    <FlexStart>
                        <Img width={ 55 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />

                        <Img width={ 25 }
                            src={ img1 }
                            alt='lemongrass hostel'
                        />
                    </FlexStart>
                </Block>
            </Content>
    </Root>
    );
}

export default Gallery;

const Content = styled.div`
    width: 100%;
    position: relative;
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
    position: relative;
`;

const Root = styled.div`
    background: #FDBA53;
    position: relative;
    width: 100%;
`;

const StyledText = styled(Text)`
    text-align: center;
    padding: 30px 0 25px;
`;

const TitleWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    font-size: 15vw;
    text-transform: uppercase;
    -webkit-text-stroke: 4px black;
    text-stroke: 4px black;
    -webkit-text-fill-color: rgb(0,0,0,0);
    text-fill-color: rgb(0,0,0,0);
    top: 0;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
`;
