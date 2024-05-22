import styled from "styled-components";

interface ILogoImage {
  size: number;
}

interface ILogoText {
  $lineheight: number;
  size: number;
}

const LogoImage = styled.img<ILogoImage>`
  height: ${(props) => props.size}rem;
  width: auto;
`;

const LogoText = styled.div<ILogoText>`
  margin-left: 1.563rem;
  line-height: ${(props) => props.$lineheight}rem;
  color: var(--color-white-0);
  font-size: ${(props) => props.size}rem;
  font-weight: 500;
`;

const StyledLogo = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: left;
`;

const TextSpan = styled.span`
  color: var(--color-red-0);
  font-weight: bold;
`;

const Logo: React.FC<{
  imageSize: number;
  textSize: number;
  textLineHeight: number;
}> = ({ imageSize, textSize, textLineHeight }) => {
  return (
    <StyledLogo>
      <LogoImage size={imageSize} src="/UNClogo.png" alt="Logo" />
      <LogoText size={textSize} $lineheight={textLineHeight}>
        <TextSpan>
          OBE CQI <br />
        </TextSpan>{" "}
        Management System
      </LogoText>
    </StyledLogo>
  );
};

export default Logo;
