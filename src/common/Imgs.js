import React from 'react';
import styled from 'styled-components';

import Img from './Img';

const Imgs = ({ images }) => {
    return (
        <Root>
            { images.map(image =>
                <Img src={ image.src}
                    text={ image.text }
                />
            )}
        </Root>
    );
}

export default Imgs;

const Root = styled.div`
    position: relative;
    padding: 20px 0 50px;
`;
