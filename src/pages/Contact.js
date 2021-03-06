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

                <a rel="noopener noreferrer"
                    href="https://www.facebook.com/lemongrasshostel"
                    target="_blank"
                >
                    <Link>
                        <em>Facebook</em>
                    </Link>
                </a>

                <a href="https://www.instagram.com/lemongrasshostel/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Link>
                        <em>Instagram</em>
                    </Link>
                </a>

                <a href="https://www.youtube.com/channel/UCMOejWFF7kYRKZzAWQwpTRw"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <Link>
                        <em>YouTube</em>
                    </Link>
                </a>

                <StyledList>
                    <ListItem href='tel:+357 99 881812'>
                        <FillText>Call us</FillText>
                        <Text small>+357 99 881812</Text>
                    </ListItem>

                    <ListItem href='mailto:info.lemongrasshostel@gmail.com'>
                        <FillText>Email</FillText>
                        <SmallText small>info.lemongrasshostel@gmail.com</SmallText>
                    </ListItem>
                </StyledList>

                <Copy small><em>&copy; { new Date().getFullYear() } Lemongrass hostel</em></Copy>
            </Content>
        </Root>
)};

export default Contact;

const Root = styled.div`
    padding: 0 125px 140px 0;
    display: flex;
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 0 20px 60px;
        flex-direction: column;
    }
`;


const Copy = styled(Text)`
    margin-top: 40px;
    text-align: right;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-top: 20px;
    }
`;

const SmallText = styled(Text)`
    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        font-size: 14px !important;
    }
`;

const Content = styled.div`
    margin-top: 136px;
    width: 100%;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-top: 20px;
    }
`;

const StyledList = styled.div`
    width: 50%;
    margin-left: auto;
    border-top: 1px solid black;
    margin-top: -90px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 100%;
        margin-left: 0;
        margin: 30px 0;
    }
`;

const StyledText = styled(Text)`
    margin-bottom: 10px;
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
    margin-bottom: 40px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-bottom: 20px;
    }
`;

const A = styled.a`
    text-decoration: underline;
    color: black;
`;
