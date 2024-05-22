import styled from "styled-components";
import { InputHTMLAttributes } from "react";

interface IFormRowVertical {
  $margin: number;
}

const StyledFormRowVertical = styled.div<IFormRowVertical>`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
  margin-top: ${(props) => props.$margin}rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-0);
`;

type Props = {
  children: React.ReactElement<InputHTMLAttributes<HTMLInputElement>>;
  label?: string;
  error?: string;
  marginTop: number;
};

const FormRowVertical: React.FC<Props> = ({
  label,
  error,
  marginTop,
  children,
}) => {
  return (
    <StyledFormRowVertical $margin={marginTop}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRowVertical>
  );
};

export default FormRowVertical;
