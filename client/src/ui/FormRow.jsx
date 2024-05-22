import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
    margin-top: 1.5rem;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-100);
  }

  &:has(button) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex: 1;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  margin-bottom: 0;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
