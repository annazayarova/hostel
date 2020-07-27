import React from 'react';
import styled from 'styled-components';

import img2017 from '../img/2017.jpg';
import img2018 from '../img/2018.jpg';
import img2020 from '../img/2020.png';

import List from '../common/ItemList';
import Text from '../common/Text';
import Title from '../common/Title';
import SubTitle from '../common/SubTitle';
import Facilities from '../common/Facilities';

const items=[{
    value: 'booking.com Traveller Review Awards',
    img: img2020,
    strokeHeader: 2020,
    award: '8.9 of 10'
}, {
    value: 'Travel Myth',
    img: img2017,
    strokeHeader: 2020,
    award: 'Top 3 adult only accomodation in Limassol'
}, {
    value: 'Travel Myth',
    img: img2017,
    strokeHeader: 2019,
    award: 'Top adult only accomodation in Limassol'
}, {
    value: 'HOSCAR Awards',
    img: img2017,
    strokeHeader: 2019,
    award: 'Best hostel in Cyprus'
}, {
    value: 'HOSCAR Awards',
    img: img2018,
    strokeHeader: 2018,
    award: 'Best hostel in Cyprus'
}, {
    value: 'HOSCAR Awards',
    img: img2017,
    strokeHeader: 2017,
    award: 'Best hostel in Cyprus'
}];

const About = () => {
    return (
        <Root>
            <Title text="About us" />

            <Container>
                <StyledText>
                    Lemongrass is a small, authentic and cozy <span>hostel</span>. A home for <span>backpackers</span> and everyone who shares in the spirit of hostel life.
                    For those <span>travellers</span> who come to Cyprus and prefer a real <span>home stay</span> whilst exploring our beautiful sunny island.
                </StyledText>

                <Content>
                    <Block sticky>
                        <StyledSubtitle>
                            awards
                        </StyledSubtitle>

                        <Text small>
                            We are very greateful to you guys as our guests for rate us top for years,
                            it validates an effort we put into our work.
                            Lemongrass hostel is a HOSCARS winner as <em>The Best Hostel in Cyprus</em> over last few years.
                            The HOSCARS (Hostelworld Customer Annual Ratings) Hostel awards
                            are given out every year to celebrate the best hostels around the globe.
                        </Text>
                    </Block>

                    <Block topOffset>
                        <List items={ items } />
                    </Block>
                </Content>

                <Content>
                    <Block sticky>
                        <StyledSubtitle>
                            facilities
                        </StyledSubtitle>

                        <Text small>
                            We have all facilities needed to ensure a carefree stay away from home
                        </Text>

                        <Facilities />
                    </Block>

                    <Block topOffset>
                        <BoldText small>
                            <em>Great location</em>
                        </BoldText>
                        <Text small bottomOffset>
                            The hostel is located in heart of the city, in a safe, quite and secure neighborhood,
                            10 minutes away from the downtown and promenade
                        </Text>

                    <BoldText small>
                        <em>friendly atmosphere</em>
                    </BoldText>
                    <Text small bottomOffset>
                        We assist you anytime to arrange cool programs, like roadtrip to mountains or cycling around the city,
                        and provide detailed information about the island, including sights, nightlife, festivals and other cultural events.
                        Our advices are based on personal experience and knowledge
                    </Text>

                    <BoldText small>
                        <em>Spacious rooms</em>
                    </BoldText>
                    <Text small bottomOffset>
                        The rooms in our hostel are bright and spacious, accommodation in dorms with 4-6 beds.
                        All rooms have direct access to a balcony with garden view.
                        Towel and socket adaptors are provided
                    </Text>

                    <BoldText small>
                        <em>Stay safe</em>
                    </BoldText>
                    <Text small bottomOffset>
                        Every dorm is equipped with locker boxes, that can only be opened with unique code known only to you
                    </Text>

                    <BoldText small>
                        <em>Free Wi-Fi</em>
                    </BoldText>
                    <Text small bottomOffset>
                        Free & fast Wi-Fi is available in every room of the hostel
                    </Text>

                    <BoldText small>
                        <em>Book corner</em>
                    </BoldText>
                    <Text small bottomOffset>
                        Exchange your book with books from our collection
                    </Text>

                    <BoldText small>
                        <em>Guest kitchen</em>
                    </BoldText>
                    <Text small bottomOffset>
                        Hostel has a fully equipped kitchen where you can store and cook your food.
                        We provide free tea and coffee
                    </Text>

                    <BoldText small>
                        <em>Shower</em>
                    </BoldText>
                    <Text small bottomOffset>
                        We have two shower rooms with high pressure hot water.
                        Shower gel and shampoo are provided. Hair dryer can be found at reception
                    </Text>

                    <BoldText small>
                        <em>Laundry</em>
                    </BoldText>
                    <Text small bottomOffset>
                        We wash your used clothes. 1 load of machine (6kg) for 5€
                    </Text>

                    <BoldText small>
                        <em>Rent a bike</em>
                    </BoldText>
                    <Text small bottomOffset>
                        We can always help you to rent a bike,
                        station is located at the entrance of the hostel
                    </Text>
                    </Block>
                </Content>
            </Container>
        </Root>
    );
}

export default About;

const Content = styled.div`
    display: flex;
    justify-content: space-between;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        flex-direction: column;
    }
`;

const Block = styled.div`
    align-self: flex-start;
    width: calc(50% - 60px);
    position: ${ props => props.sticky ? 'sticky' : 'relative' };
    top: 0;
    margin: ${ props => props.topOffset ? '205px' : '0' } 0 0;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 100%;
        position: relative;
        margin: 40px 0 0;
    }
`;

const Container = styled.div`
    width: 100%;
`;

const Root = styled.div`
    padding: 0 125px 140px 0;
    display: flex;
    position: relative;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        padding: 0 20px 20px;
        flex-direction: column;
    }
`;

const BoldText = styled(Text)`
    text-transform: uppercase;
    margin-bottom: 5px;
`;

const StyledText = styled(Text)`
    margin: 115px 0 0;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin: 10px 0 0;
    }
`;

const StyledSubtitle = styled(SubTitle)`
    margin: 115px 0 10px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        margin: 0 0 10px;
    }
`;
