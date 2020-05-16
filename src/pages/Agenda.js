import React from 'react';
import styled from 'styled-components';

import Title from '../common/Title';
import Text from '../common/Text';

import { ReactComponent as Cat } from '../img/cat.svg';

const Agenda = () => {
    return (
        <Root>
            <Title text="What to do" />
            <CatWrapper>
                    <StyledCat />
            </CatWrapper>

            <Container>
                <Text small>
                    We create these videos during our roadtrips to provide a sense of what there is to see in the island.
                </Text>
                <Wrapper>
                </Wrapper>

            </Container>
        </Root>
    );
}

export default Agenda;

const Root = styled.div`
    background-color: #FDBA53;
    min-height: 100%;
    padding: 0 125px 90px 0;
    display: flex;
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 0 20px 60px;
        flex-direction: column;
    }
`;

const Container = styled.div`
    width: 100%;
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
