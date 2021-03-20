import { createGlobalStyle } from 'styled-components';
import colors from '@config/colors/index.yml';
import heroFont from '../fonts/SignPainter.ttf';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'heroFont';
  src: local('hero Font'), local('heroFont'),
       url(${heroFont});
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  letter-spacing: 0.8px;
  height: 100vh;
  width: 100vw;
  overflow-x:hidden;
  background-color: ${colors.bgDark};
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

#error-page {
  height: 92vh;
  height: calc(100vh - 80px);
  width: 100vw;
  padding: 80px;
  /* background-position: center center;
  background-size: cover;
  background-repeat: no-repeat; */
  /* background-image: url(../img/404.jpg); */
}

#error-page #text-error-page {
  height: 92vh;
  height: calc(100vh - 80px);
  position: relative;
  z-index: 2;
  margin-top: -80px;
  padding-top: 80px;
  background: rgba(0, 0, 0, 0.6);
}

#error-page #text-error-page .container {
  position: relative;
  z-index: 3;
  top: 50%;
  padding: 72px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

#error-page #text-error-page .container .content {
  padding: 0 10px;
}

#error-page #text-error-page .container .content h1,
#error-page #text-error-page .container .content h2,
#error-page #text-error-page .container .content h3 {
  color: white;
  margin-bottom: 0;
}

#error-page #text-error-page .container .content h1.big {
  margin-bottom: 0;
}

#error-page #text-error-page .container .content a.btn {
  margin-left: 0;
}

@media screen and (max-width: 991px) {
  #error-page {
    height: calc(100vh - 100px);
  }
}

h1.big {
  font-size: 120px;
  line-height: 120px;
}

@media screen and (max-width: 1300px) {
  h1.big {
    font-size: 80px;
    line-height: 80px;
  }
}

@media screen and (max-width: 767px) {
  h1.big {
    font-size: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 480px) {
  h1.big {
    font-size: 40px;
    line-height: 40px;
  }
}

.light-paragraph {
  color: ${colors.light};
  margin-top: 24px;
  margin-bottom: 36px;
}

a.btn {
  padding: 0;
  padding-right: 30px;
  padding-left: 30px;
  height: 55px;
  line-height: 53px;
  text-align: center;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  overflow: hidden;
  outline: none;
  border-radius: 0;
  font-weight: bold;
  position: relative;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 35px;
  text-decoration: none !important;
}

a.btn:hover {
  background-color: ${colors.dark};
  color: ${colors.light}!important;
  border-color: transparent;
}

a.btn:last-child {
  margin-right: 0;
}

@media screen and (max-width: 1199px) {
  a.btn {
    margin-right: 0;
    margin-left: 20px;
  }
}

a.btn.white {
  border: 2px solid white;
  color: white;
}

a.btn.white:hover {
  border-color: transparent;
}
`;

export default GlobalStyles;
