import React from 'react';
import styled from 'styled-components';

import Award from './Award';

import img2017 from '../img/2017.jpg';
import img2018 from '../img/2018.jpg';
import img2020 from '../img/2020.png';

const items=[{
    year: 2020,
    data: [{
        company: 'hostelworld.com',
        img: img2020,
        name: '9.4 out of 10'
    }, {
        company: 'Travel Myth',
        img: img2017,
        name: 'Top 3 adult only accomodation in Limassol'
    }]
}, {
    year: 2019,
    data: [{
    company: 'Travel Myth',
    img: img2017,
    name: 'Top adult only accomodation in Limassol'
    }, {
        company: 'HOSCAR Awards',
        img: img2017,
        name: 'Best hostel in Cyprus'
    }, {
        company: 'booking.com Guest Review Awards',
        img: img2020,
        name: '8.9 out of 10'
    }]
}, {
    year: 2018,
    data: [{
        company: 'HOSCAR Awards',
        img: img2018,
        name: 'Best hostel in Cyprus'
    }, {
        company: 'booking.com Guest Review Awards',
        img: img2018,
        name: '9.1 out of 10'
    }]
}, {
    year : 2017,
    data: [{
        company: 'HOSCAR Awards',
        img: img2017,
        name: 'Best hostel in Cyprus'
    }, {
        company: 'booking.com Guest Review Awards',
        img: img2017,
        name: '9.4 out of 10'
    },{
        company: 'HolidayCheck Award',
        img: img2017,
        name: '6 out of 6'
    }]
}, {
    year : 2016,
    data: [{
        company: 'booking.com Guest Review Awards',
        img: img2017,
        name: '9.7 out of 10'
    }]
}];

const Awards = () => {
    return (
        <Root>
            { items.map(item =>
                <Award key={ item.index }
                    item={ item }
                />
            )}
        </Root>
    );
};

export default Awards;

const Root = styled.div`
    border-bottom: 1px solid black;
`;
