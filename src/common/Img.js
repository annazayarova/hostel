import React from 'react';
import styled from 'styled-components';

const Img = ({ src }) => {
    return (
        <Root>
            <img src={ src }
                alt="lemongrass hostel"
            />
        </Root>
    );
}

export default Img;

const Root = styled.div`
    display: block;
    position: relative;
    width: 100%;
`;
