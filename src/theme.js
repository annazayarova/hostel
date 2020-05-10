import { createGlobalStyle } from 'styled-components';

export const theme = {
    primaryColorPelette: {
        main: '#8CC7AC',
        light: '#9BD9BC'
    },
    fontFamily: {
        primary: 'Spartan, sans-serif',
        secondary: 'Amatic SC'
    },
    greyColor: '#f2f2f2',
    tabletBreakpoint: '768px',
    secondaryColor: '#FDBA53',
    tertiaryColor: '#DC2C6F'
};

export const GlobalStyle = createGlobalStyle`
    * {
        font-smoothing: antialiased;
        font-stretch: normal;
        font-style: normal;
        text-rendering: optimizeLegibility;
    }

    body {
        background: ${ props => props.theme.primaryColorPelette.main };
        font-family: Spartan, sans-serif;
        font-size: 14px;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: relative;
        overflow-x: hidden;
        line-height: 1;
    }

    img, svg {
        width: 100%;
    }

    a {
        text-decoration:none
    }

    html,
    body,
    #root {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    html {
        scroll-behavior: smooth;
    }
`;
