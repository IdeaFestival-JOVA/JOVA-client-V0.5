import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Pretendard-Regular', sans-serif; /* 기본 폰트 설정 */
        font-size: 16px;
        color: #333;
        background-color: #f9f9f9; /* 배경색은 필요에 따라 수정 */
    }
`;

export default GlobalStyle;
