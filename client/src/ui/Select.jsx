import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 1rem 1.2rem;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  color: var(--color-gray-8);
  font-weight: 600;
  box-shadow: var(--shadow-sm);
  border: 1px solid var(--color-gray-8);
  margin-left: 3rem;
  margin-top: 2rem;
  border-radius: var(--border-radius-sm);
`;
function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} {...props} onChange={onChange}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
}

export default Select;
