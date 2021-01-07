import React, { useState } from 'react';
import styled from 'styled-components';

import Text from '../common/Text';

const Item = ({ items }) => {
    return (
        <Root>
            <Link onClick={ () => setOpen(!open) }>
                <Text>{ item.value }</Text>

                <Cross open={ open } />
            </Link>
        </Root>
    );
};

export default Item;

const Cross = styled.div`
    position: relative;
    width: 15px;
    height: 15px;
    justify-content: center;
    display: flex;
    align-items: center;
    transform: ${ ({ open }) => open ? 'rotate(45deg)' : 0 };
    transition: all ease-in-out 0.3s;

    &:before {
        background-color: black;
        content: '';
        height: 3px;
        position: absolute;
        width: 15px;
    }

    &:after {
        background-color: black;
        content: '';
        width: 3px;
        position: absolute;
        height: 15px;
    }
`;

const Link = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    position: relative;
`;

const Collapse = styled.div`
    opacity: ${props => (props.open ? 1 : 0)};
    max-height: ${props => (props.open ? '100%' : '0')};
    overflow: hidden;
    padding: ${props => (props.open ? '0 0 20px' : '0')};
    transition: all 0.3s;
`;

const Root = styled.div`
    border-bottom: 1px solid black;
`;
