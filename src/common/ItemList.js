import React, { useState } from 'react';
import styled from 'styled-components';

import Item from './Item';

const ItemList = ({ className, items }) => {
    return (
        <Root className={ className }>
            { items.map(item => (
                <Item key={ item }
                    item={ item }
                />
            )) }
        </Root>
    );
};

export default ItemList;

const Root = styled.div`
    border-top: 1px solid black;
    position: relative;
    cursor: pointer;
`;
