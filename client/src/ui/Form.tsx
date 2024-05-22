import styled, { css } from "styled-components";

type IForm = {
  type?: "modal";
  width?: number;
};

const Form = styled.form<IForm>`
  ${(props) =>
    props.type !== "modal" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-white-0);
      border: 1px solid var(--color-gray-0);
      border-radius: var(--border-radius-md);
    `}

  /* ${(props) =>
    props.type === "modal" &&
    css`
      width: 40rem;
    `} */

  width: ${(props) => props.width}rem;

  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;
