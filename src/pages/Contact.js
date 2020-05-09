import React from 'react';
import styled from 'styled-components';

import Text from '../common/Text';
import Title from '../common/Title';

const Contact = () => {
    return (
        <Root>
            <Title text="Find us" />

            <Content>
                <A href="https://goo.gl/maps/opdgdZbqwSZ8aFni8" target="_blank">
                    <StyledText>
                        Leontiou Machaira 73
                    </StyledText>
                </A>

                <Address>
                    Limassol, Cyprus
                </Address>

                <a href="https://www.facebook.com/lemongrasshostel" target="_blank">
                    <Link>
                        <span>Facebook</span>
                    </Link>
                </a>

                <a href="https://www.instagram.com/lemongrasshostel/" target="_blank">
                    <Link>
                        <span>Instagram</span>
                    </Link>
                </a>

                <StyledList>
                    <ListItem href='tel:+357 99 881812'>
                        <FillText>Call us</FillText>
                        <Text small>+357 99 881812</Text>
                    </ListItem>

                    <ListItem href='mailto:lemongrasshostel@gmail.com'>
                        <FillText>Drop a line</FillText>
                        <Text small>lemongrasshostel@gmail.com</Text>
                    </ListItem>
                </StyledList>
            </Content>
        </Root>
)};

export default Contact;

const Root = styled.div`
    padding: 0 125px 90px 0;
    display: flex;
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 0 20px 90px;
        flex-direction: column;
    }
`;


const Content = styled.div`
    margin-top: 130px;
    width: 100%;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-top: 20px;
    }
`;

const StyledList = styled.div`
    width: 50%;
    margin-left: auto;
    border-top: 1px solid black;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 100%;
        margin-left: 0;
        margin-top: 40px;
    }
`;

const StyledText = styled(Text)`
    margin-bottom: 20px;

    :last-of-type {
        margin-bottom: 0;
    }
`;

const FillText = styled(Text)`

`;

const ListItem = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid black;
    padding: 20px 0;

    :hover {
        ${ FillText } {
            -webkit-text-stroke: 1px black;
            text-stroke: 1px black;
            -webkit-text-fill-color: transparent;
            text-fill-color: transparent;
        }
    }
`;

const Link = styled(StyledText)`
    :hover {
        span {
            -webkit-text-stroke: 0px black;
            text-stroke: 0px black;
            -webkit-text-fill-color: black;
            text-fill-color: black;
        }
    }
`;

const Address = styled(Text)`
    margin-bottom: 20px;
`;

const A = styled.a`
    text-decoration: underline;
    color: black;
`;
