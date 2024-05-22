import styled, { css } from "styled-components";

type TLogoImageProps = {
  size?: "small" | "large";
};

const sizes = {
  small: css`
    height: 9.6rem;
  `,
  large: css`
    height: 24rem;
  `,
};

const LogoImage = styled.img<TLogoImageProps>`
  width: auto;

  ${({ size }) => size && sizes[size]};
`;

LogoImage.defaultProps = {
  size: "small",
};

export default LogoImage;
