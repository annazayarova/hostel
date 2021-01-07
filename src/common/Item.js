import React from 'react';
import styled from 'styled-components';

import Text from '../common/Text';

const Item = ({ item }) => {

    return (
        <Root>
            <Link>
                <Block>
                    { item.strokeHeader && <Header><span>{ item.strokeHeader }</span></Header> }
                    { item.fillHeader && <Header>{ item.fillHeader }</Header> }

                    <ExternalLink>
                        { item.link && <Text small> { item.link }</Text> }
                    </ExternalLink>

                    <RightSide>
                        { item.award && <Award small><em>{ item.award },</em></Award> }

                        { item.value && <Text small> { item.value }</Text> }
                    </RightSide>
                </Block>
            </Link>
        </Root>
    );
};

export default Item;

const Award = styled(Text)`
    margin-right: 6px;
`;

const Block = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

const ExternalLink = styled.div`
`;

const RightSide = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: auto;
`;

const Header = styled(Text)`
    margin-right: 20px;
    line-height: 1;
`;

const Link = styled.div`
    display: flex;
    padding: 20px 0;
    position: relative;
`;

const Root = styled.div`
    border-bottom: 1px solid black;
    transition: all 0.3s;

    :hover {
        ${ Header } {
            span {
                -webkit-text-stroke: 0px black;
                text-stroke: 0px black;
                -webkit-text-fill-color: rgb(0,0,0,1);
                text-fill-color: rgb(0,0,0,1);
            }
        }
    }
`;
