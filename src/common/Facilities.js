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
    rotate: '5'
}, {
    icon: <HairDryer />,
    title: 'hair dryer',
    top: '20%',
    left: '65%',
    rotate: '10'
}, {
    icon: <Iron />,
    title: 'iron',
    top: '40%',
    left: '87%',
    rotate: '0'
}, {
    icon: <Shampoo />,
    title: 'shampoo',
    top: '35%',
    left: '20%',
    rotate: '5'
}, {
    icon: <WashingMachine />,
    title: 'laundry',
    top: '82%',
    left: '45%',
    rotate: '0'
}, {
    icon: <Towel />,
    title: 'towel',
    top: '8%',
    left: '15%',
    rotate: '-10'
}, {
    icon: <Plugin />,
    title: 'adaptor',
    top: '65%',
    left: '25%',
    rotate: '-5'
}, {
    icon: <Bank />,
    title: 'locker',
    top: '60%',
    left: '65%',
    rotate: '-2'
}, {
    icon: <Bunk />,
    title: 'bunk',
    top: '55%',
    left: '0%',
    rotate: '-5'
}];

const Facilities = () => {
    return (
        <Root>
            <StyledOIcon />

            { icons.map(icon =>
                <StyledIcon top={ icon.top }
                    left={ icon.left }
                    rotate={ icon.rotate }
                >
                    { icon.icon }

                    <StyledSubtitle>
                        { icon.title }
                    </StyledSubtitle>
                </StyledIcon>
            )}
        </Root>
    );
}

export default Facilities;

const animate = keyframes`
0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
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

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        font-size: 16px;
        line-height: 16px;
    }
`;

const StyledIcon = styled.div`
    position: absolute;
    top: ${ props => props.top };
    left: ${ props => props.left };
    transform: rotate(${ props => props.rotate }deg);
    animation: ${ animate } 0.5s infinite;
`;
