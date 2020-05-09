import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (
        <Root>
            <Block></Block>
            <Item>
                gallery
            </Item>
            <Item>
                about us
            </Item>
            <Item>
                agenda
            </Item>
            <Item>
                contact
            </Item>
        </Root>
    );
}

export default Nav;

const Root = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
`;

const Item = styled.div`
    padding-bottom: 5px;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.75px;
`;
