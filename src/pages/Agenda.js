import React from 'react';
import styled from 'styled-components';

import Title from '../common/Title';

import { ReactComponent as Cat } from '../img/cat.svg';

const Agenda = () => {
    return (
        <Root>
            <Title text="What to do" />

            <Container>
                <CatWrapper>
                    <StyledCat />
                </CatWrapper>
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
    width: 50%;
    height: auto;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        position: relative;
        width: 100%;
        left: 0;
        margin: 0 0 40px;
    }
`;

const CatWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    position: sticky;
    width: 50%;
    height: 100vh;
    left: 0;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        position: relative;
        width: 70%;
        margin: 0 0 40px;
        height: auto;
`;
