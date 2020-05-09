import styled from 'styled-components';

const Subtitle = styled.h2`
    color: black;
    font-size: 80px;
    font-family: ${ props => props.theme.fontFamily.secondary };
    line-height: 70px;
    margin: 0;
    padding: 0;

    @media(max-width: ${ ({ theme }) => theme.tabletBreakpoint }) {
        font-size: 50px;
        line-height: 50px;
    }
`;

export default Subtitle;
