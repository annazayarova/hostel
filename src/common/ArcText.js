import React from 'react';
import styled from 'styled-components';

const ArcText = ({ className, text, arc, radius }) => {
    const characters = text.split('');
    const degree = arc / characters.length;

    return (
    <div className={ className }>
        { characters.map((letter, i) => (
            <Letter className={ className }
                key={ i }
                style={{
                height: `${radius}px`,
                transform: `rotate(${degree * i - arc / 2}deg)`,
                transformOrigin: `0 ${radius}px 0`
                }}
            >
                { letter }
            </Letter>
        ))}
    </div>
    );
}

export default ArcText;

const Letter = styled.span`
    position: absolute;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
`;
