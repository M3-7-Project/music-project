import styled, { createGlobalStyle } from "styled-components";
import { DarkTheme } from "./theme";

export const Global = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, input, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    html{
        height: 100%;
    }
    body {
        min-height: 100%;
        line-height: 1;
        font-family: 'Poppins', sans-serif;
        ::-webkit-scrollbar {
            width: 4px;
        }
        ::-webkit-scrollbar-track {
            background-color: #212529;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 2px;
            background-image: linear-gradient(180deg, #D0368A 0%, #708AD4 99%);
        }
        ::-webkit-scrollbar-thumb:hover {
        background: #555;
        }
    }
    body, input {
        font-family: 'Poppins', sans-serif;
        background-color: var(--grey-00);
    }
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    :root{
        ${DarkTheme}
    }
`;