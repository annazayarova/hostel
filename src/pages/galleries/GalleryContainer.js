import React from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import Img from '../../common/Img';
import Text from '../../common/Text';

import { ReactComponent as GalleryTitle } from '../../img/gallery.svg';
import { ReactComponent as Cat } from '../../img/cat.svg';
import { ReactComponent as CloseIcon } from '../../img/arrow.svg';

import BookNow from '../../common/BookNow';

const GalleryContainer = ({ title, images, subtitle }) => {

    const renderMenu = () => (
        <>
            <StyledNavLink to='/lounge'><Text small><em>Lounge</em></Text></StyledNavLink>
            <StyledNavLink to='/kitchen'><Text small><em>Kitchen</em></Text></StyledNavLink>
            <StyledNavLink to='/bath'><Text small><em>Bath</em></Text></StyledNavLink>
            <StyledNavLink to='/rooms'><Text small><em>Rooms</em></Text></StyledNavLink>
            <StyledNavLink to='/outdoor'><Text small><em>Outdoor</em></Text></StyledNavLink>
            <CloseNavLink to='/'><Text small><em>Close</em></Text></CloseNavLink>
        </>
    );

    return (
        <Root>
            <StyledGalleryTitle />

            <BookNow />

            <Container>
                <Col>
                    <Header>
                        <Close>
                            <CloseLink to='/'><StyledCloseIcon /></CloseLink>
                        </Close>

                        <MenuTop>
                            { renderMenu() }
                        </MenuTop>

                        <Title>
                            <StyledCat />

                            <Text>
                                { title }
                            </Text>
                        </Title>

                        <StyledText small>
                            { subtitle }
                        </StyledText>
                    </Header>

                    { images.map(image => <StyledImg src={ image }/>) }
                </Col>
            </Container>

            <MenuBottom>
                { renderMenu() }
            </MenuBottom>

            <Link to="/">
                <Footer small>
                    <em>&copy; { new Date().getFullYear() } Lemongrass hostel</em>
                </Footer>
            </Link>
        </Root>
    );
}

export default GalleryContainer;

const StyledCat = styled(Cat)`
    width: 48px;
    height: 48px;
    margin-right: 10px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 28px;
        height: 28px;
    }
`;

const Title = styled.div`
    display: flex;
`;

const Header = styled.div`
    padding: 10px 0;
`;

const StyledText = styled(Text)`
    margin: 10px 0;
`;

const Footer = styled(Text)`
    cursor: pointer;
    padding: 20px 0 40px;
    text-align: center;
    width: 100%;
    margin: 0 auto;
    text-decoration: underline;
`;

const StyledImg = styled(Img)`
    margin-bottom: 20px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-bottom: 10px;
    }
`;

const Container = styled.div`
    position: relative;
    padding: 0 140px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 0;
    }
`;

const Col = styled.div`
    margin: 0 8%;
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin: 0;
    }
`;

const Root = styled.div`
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 0 10px;
    }
`;

const StyledGalleryTitle = styled(GalleryTitle)`
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: auto;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        display: none;
    }
`;

const MenuTop = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: flex-end;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        display: none;
    }

    ${ Text } {
        letter-spacing: 0;
    }
`;

const MenuBottom = styled.div`
    margin: 30px 0;
    justify-content: flex-start;
    flex-wrap: wrap;
    display: none;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        display: flex;
    }

    ${ Text } {
        letter-spacing: 0;
        margin-top: 10px;
    }
`;

const activeClassName = 'nav-item-active'

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
    margin-left: 20px;
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-right: 20px;
        margin-left: 0;
    }

    &.${ activeClassName } {
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background: black;
            bottom: 0;
        }
    }
`;

const CloseNavLink = styled(NavLink)`
    margin-left: 20px;

    ${ Text } {
        color: ${ ({ theme}) => theme.tertiaryColor };
    }

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin-right: 20px;
        margin-left: 0;
    }
`;

const CloseLink= styled(NavLink)`
    ${ Text } {
        color: ${ ({ theme}) => theme.tertiaryColor };
    }
`;

const Close= styled.div`
    margin: 28px 0;
    display: none;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        display: block;
    }
`;

const StyledCloseIcon= styled(CloseIcon)`
    width: 22px;
    height: 22px;
    display: none;
    transform: rotate(-90deg);

    path {
        fill: black;
    }

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        display: block;
    }
`;
