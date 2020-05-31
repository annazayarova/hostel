import React from 'react';
import styled from 'styled-components';

import Title from '../common/Title';
import Text from '../common/Text';

import { ReactComponent as Cat } from '../img/cat.svg';

const Agenda = () => {
    return (
        <Root>
            <Title text="What to do"
                offset="158px"
            />
            <Container>
                <Box>
                    <StyledText small>
                        We create these videos during our roadtrips to provide a sense of what there is to see in the island
                    </StyledText>
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

const StyledCat = styled(Cat)`
    width: 60px;
    height: auto;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {

    }
`;

const CatWrapper = styled.div`
    top: 125px;
    left: 90px;
    position: absolute;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {

`;

const StyledText = styled(Text)`
    margin: 115px 0 0;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin: 10px 0 0;
    }
`;

const Wrapper = styled.div`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;

    iframe{
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`;
