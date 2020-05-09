import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Cat } from '../img/cat.svg';
import ItemList from '../common/ItemList';

const items=[{
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}, {
    value: 'coming soon...'
}];

const Agenda = () => {
    return (
        <Root>
            <CatWrapper>
                <StyledCat />
            </CatWrapper>

            <StyledItemList items={ items }
                title="city agenda"
            />
        </Root>
    );
}

export default Agenda;

const Root = styled.div`
    background: #FDBA53;
    min-height: 100%;
    position: relative;
    padding: 20px 20px 90px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 15px;
    }
`;

const StyledItemList = styled(ItemList)`
    margin-top: calc(-100vh + 60px);
    width: 50%;
    margin-left: auto;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-top: 20px;
        width: 100%;
        margin-left: 0;
    }
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
