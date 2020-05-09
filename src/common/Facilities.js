import React from 'react';
import styled from 'styled-components';

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
    left: '45%'
}, {
    icon: <HairDryer />,
    title: 'hair dryer',
    top: '20%',
    left: '65%'
}, {
    icon: <Iron />,
    title: 'iron',
    top: '40%',
    left: '87%'
}, {
    icon: <Shampoo />,
    title: 'shampoo',
    top: '35%',
    left: '20%'
}, {
    icon: <WashingMachine />,
    title: 'laundry',
    top: '82%',
    left: '45%'
}, {
    icon: <Towel />,
    title: 'towel',
    top: '8%',
    left: '15%'
}, {
    icon: <Plugin />,
    title: 'adaptor',
    top: '65%',
    left: '25%'
}, {
    icon: <Bank />,
    title: 'locker',
    top: '60%',
    left: '65%'
}, {
    icon: <Bunk />,
    title: 'bunk',
    top: '55%',
    left: '0%'
}];

const Facilities = () => {
    return (
        <Root>
            <StyledOIcon />

            { icons.map(icon =>
                <StyledIcon top={ icon.top }
                    left={ icon.left }
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
`;
