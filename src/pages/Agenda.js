import React from 'react';
import styled from 'styled-components';

import Text from '../common/Text';
import Title from '../common/Title';

const Agenda = () => {
    return (
        <Root>
            <Title text="What to do"
                offset="158px"
            />
            <Container>
                <Box>
                    <StyledText small>
                        We've created these videos during our roadtrips to provide a sense of what there is to see in the island
                    </StyledText>

                    <BoldText small>
                        <em>1. Akamas, Cyprus</em>
                    </BoldText>

                    <Text small>
                        It takes 1.5h to get to the beginning of Akamas Peninsula from Lemongrass hostel
                    </Text>

                    <Video>
                        <iframe title="myFrame"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/zEfZNPIyt-4"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
                            allowfullscreen>
                        </iframe>
                    </Video>
                </Box>

                <Box>
                </Box>

            </Container>
        </Root>
    );
}

export default Agenda;

const Root = styled.div`
    background-color: #FDBA53;
    min-height: 100%;
    padding: 0 125px 140px 0;
    display: flex;
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 0 20px 20px;
        flex-direction: column;
    }
`;

const Container = styled.div`
    width: 100%;
    display: flex;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        flex-direction: column;
    }
`;

const Box = styled.div`
    align-self: flex-start;
    width: calc(50% - 60px);

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 100%;
    }
`;

const BoldText = styled(Text)`
    text-transform: uppercase;
    margin-bottom: 5px;
`;

const StyledText = styled(Text)`
    margin: 115px 0 40px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin: 10px 0 40px;
    }
`;

const Video = styled.div`
    height: 0;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    margin-top: 20px;

    iframe{
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`;
