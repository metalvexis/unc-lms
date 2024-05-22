import styled, { css } from "styled-components";

type IInput = {
  $modal?: "true" | "false";
};

const modalInput = {
  true: css`
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid var(--color-gray-4);
    background-color: transparent;
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);

    &:focus {
      outline: none;
      border-bottom: 1px solid black;
      transition: 0.2s, border 0.2s;
    }
  `,

  false: css`
    border: 1px solid var(--color-gray-2);
    background-color: var(--color-gray-2);
    border-radius: var(--border-radius-sm);
    padding: 0.8rem 1.2rem;
    box-shadow: var(--shadow-sm);
  `,
};

const Input = styled.input<IInput>`
  ${({ $modal }) => $modal && modalInput[$modal]}
`;

Input.defaultProps = {
  $modal: "false",
};

export default Input;
