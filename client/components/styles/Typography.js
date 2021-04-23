import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
    @font-face {
        font-family: 'Cutive';
        src: url('/static/CutiveMono-Regular.ttf') format('truetype');
        font-weight: normal;
        font-display: block;
    }
    @font-face {
        font-family: 'MajorMono';
        src: url('/static/MajorMonoDisplay-Regular.ttf') format('truetype');
        font-weight: normal;
        font-display: block;
    }
    html {
        font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 10px;
    }
    body {
        font-size: 1.5rem;
    }
    p, li {
        letter-spacing: 0.5px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: normal;
        margin: 0;
    }
`;

export default Typography;
