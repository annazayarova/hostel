import React from 'react';
import styled, { keyframes } from 'styled-components';

import SubTitle from '../common/SubTitle';

import { ReactComponent as OIcon } from '../img/o.svg';
import { ReactComponent as CoffeeCup } from '../img/coffee-cup.svg';
import { ReactComponent as HairDryer } from '../img/hair-dryer.svg';
import { ReactComponent as Iron } from '../img/iron.svg';
import { ReactComponent as Shampoo } from '../img/shampoo.svg';
import { ReactComponent as WashingMachine } from '../img/washing-machine.svg';
import { ReactComponent as Towel } from '../img/towel.svg';
import { ReactComponent as Plugin } from '../img/plugin.svg';
import { ReactComponent as Bank } from '../img/bank.svg';
import { ReactComponent as Bunk } from '../img/bunk.svg';

const icons = [{
    icon: <CoffeeCup />,
    title: 'tea & coffee',
    top: '-15px',
    left: '45%',
    rotate: '35',
    delay: '0'
}, {
    icon: <HairDryer />,
    title: 'hair dryer',
    top: '20%',
    left: '65%',
    delay: '1'
}, {
    icon: <Iron />,
    title: 'iron',
    top: '40%',
    left: '87%',
    delay: '1.5'
}, {
    icon: <Shampoo />,
    title: 'shampoo',
    top: '35%',
    left: '20%',
    delay: '0.5'
}, {
    icon: <WashingMachine />,
    title: 'laundry',
    top: '82%',
    left: '45%',
    delay: '2'
}, {
    icon: <Towel />,
    title: 'towel',
    top: '8%',
    left: '15%',
    delay: '2.5'
}, {
    icon: <Plugin />,
    title: 'adaptor',
    top: '65%',
    left: '25%',
    delay: '3'
}, {
    icon: <Bank />,
    title: 'locker',
    top: '60%',
    left: '65%',
    delay: '3.3'
}, {
    icon: <Bunk />,
    title: 'bunk',
    top: '55%',
    left: '0%',
    delay: '4'
}];

const Facilities = () => {
    return (
        <Root>
            <StyledOIcon />

            { icons.map(icon =>
                <StyledIcon top={ icon.top }
                    left={ icon.left }
                    animationName={ icon.animationName }
                >
                    <Icon delay={ icon.delay }
                        rotate={ icon.rotate }
                    >{ icon.icon }</Icon>

                    <StyledSubtitle delay={ icon.delay }>
                        { icon.title }
                    </StyledSubtitle>
                </StyledIcon>
            )}
        </Root>
    );
}

export default Facilities;


const shakeText = keyframes`
0% {
    transform: rotate(0deg);
}

4% {
    transform: rotate(-3deg);
}

6% {
    transform: rotate(3deg);
}

8% {
    transform: rotate(-5deg);
}

10% {
    transform: rotate(0deg);
}
`;

const Root = styled.div`
    margin-top: 40px;
    position: relative;
    height: 440px;
    width: 500px;

    svg {
        width: 55px;
        height: auto;
    }

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        height: 264px;
        width: 300px;

        svg {
            width: 40px;
        }
    }
`;

const StyledOIcon = styled(OIcon)`
    width: 500px !important;
    height: 440px !important;
    z-index: 0;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        width: 300px !important;
        height: 264px !important;
    }
`;

const StyledSubtitle = styled(SubTitle)`
    font-size: 18px;
    text-align: center;
    line-height: 18px;
    animation: ${ shakeText } 5s cubic-bezier(.36,.07,.19,.97) ${ props => props.delay }s infinite;
    backface-visibility: hidden;
    perspective: 1000px;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        font-size: 16px;
        line-height: 16px;
    }
`;

const StyledIcon = styled.div`
    position: absolute;
    top: ${ props => props.top };
    left: ${ props => props.left };
    transform: translate3d(0, 0, 0);
`;

const Icon = styled.div`
`;
