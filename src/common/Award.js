import React from 'react';
import styled from 'styled-components';

import Text from './Text';

const Award = ({ item }) => {
    const { data } = item;

    return (
        <Root>
            <Block key={ item.index }>
                <Year>
                    { item.year }
                </Year>

                <div>
                    { data.map(i =>
                        <Item small>
                            <em>{ i.name },</em> { i.company }
                        </Item>
                    )}
                </div>
            </Block>
        </Root>
    );
}

export default Award;

const Block = styled.div`
    border-top: 1px solid black;
    display: flex;
    padding: 15px 0 5px;
`;

const Item = styled(Text)`
    margin-right: 10px;
    margin-bottom: 10px;
`;

const Year = styled.h1`
    color: black;
    font-size: 50px;
    font-weight: 900;
    letter-spacing: -0.75px;
    line-height: 65px;
    margin: 0 15px 0 0;
    padding: 0;
    text-align: left;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
    -webkit-text-fill-color: rgb(0,0,0,0);
    text-fill-color: rgb(0,0,0,0);
    transition: all 0.3s;
    min-width: 145px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        font-size: 24px;
        line-height: 33px;
        min-width: 65px;

    }
`;

const Root = styled.div`
    :hover {
        ${ Year } {
            -webkit-text-stroke: 0px black;
            text-stroke: 0px black;
            -webkit-text-fill-color: rgb(0,0,0,1);
            text-fill-color: rgb(0,0,0,1);
        }
    }
`;
