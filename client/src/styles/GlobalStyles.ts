import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  /* Gray */
  --color-gray-0: #474548;
  --color-gray-1: #b9b9b9;
  --color-gray-2: #F2F2F2;
  --color-gray-3: #787878;
  --color-gray-4: #C9C9C9;
  --color-gray-5: #5F6368;
  --color-gray-6: #5E6160;
  --color-gray-7: #E0E0E0;
  --color-gray-8: #3F3F44;
  --color-gray-9: #E4E4E4;

  /* White */
  --color-white-0: #fbfbfb;

  /* Red */
  --color-red-0: #EB1E25;
  --color-red-1: #DE1B1B;
  --color-red-2: #FFE5E7;
  --color-red-3: #FF000D;

  /* Gradient */
  --gradient-color-0: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(182, 27, 27, 1) 0%,
      rgba(71, 69, 72, 1) 80%
    );

    /* Green */
    --color-green-0: #E0F2D8;
    --color-green-1: #438544;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-gray-5);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-gray-1);
  color: var(--color-gray-0);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-gray-0);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

input::placeholder {
  color: var(--color-gray-4);
}

`;

export default GlobalStyles;
