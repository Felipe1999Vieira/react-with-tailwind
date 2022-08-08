import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --background: #36474e;
        --primary: #0353B4;
        --secondary: #0F1827;
        --success:  #5cb85c;
    }

    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background-color: #f1f1f1;
        -webkit-font-smoothing: antialiase;
    }

    body, input, textarea, button {
        font-family: 'Signika', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

`;

export default GlobalStyle;
