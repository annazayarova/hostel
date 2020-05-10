import styled from 'styled-components';

const Text = styled.p`
    color: black;
    font-size: ${props => props.small ? '16px' : '50px' };
    line-height: ${props => props.small ? '26px' : '70px' };
    text-align: left;
    margin: 0 0 ${props => props.bottomOffset ? '40px' : '0' };
    padding: 0;
    font-weight: ${props => props.small ? '400' : '900' };
    letter-spacing: -0.75px;

    span {
        -webkit-text-stroke: ${props => props.small ? 'none' : '1px black' };
        text-stroke: ${props => props.small ? 'none' : '1px black' };
        -webkit-text-fill-color: ${props => props.small ? 'black' : 'rgb(0,0,0,0);' };
        text-fill-color: ${props => props.small ? 'black' : 'rgb(0,0,0,0);' };
    }

    em {
        font-weight: ${props => props.small ? 'bold' : 'normal' };
    }

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        font-size: ${props => props.small ? '16px' : '24px' };
        line-height: ${props => props.small ? '26px' : '38px' };
    }
`;

export default Text;
