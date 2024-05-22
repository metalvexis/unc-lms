import styled, { css } from "styled-components";

type IButton = {
  $variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  type?: "modal";
};

const types = {
  modal: css`
    flex: 1;
  `,
};

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.8rem 1.6rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variants = {
  primary: css`
    color: var(--color-white-0);
    background-color: var(--color-gray-3);

    &:hover {
      background-color: var(--color-gray-0);
    }
  `,
  secondary: css`
    color: var(--color-gray-8);
    background-color: var(--color-white-0);
    border: 1px solid var(--color-gray-8);
    font-weight: 600;

    &:hover {
      background-color: var(--color-gray-0);
      color: var(--color-white-0);
    }
  `,
};

const Button = styled.button<IButton>`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${({ size }) => size && sizes[size]};
  ${({ $variant }) => $variant && variants[$variant]};
  ${({ type }) => type && types[type]}
`;

Button.defaultProps = {
  $variant: "primary",
  size: "medium",
};

export default Button;
