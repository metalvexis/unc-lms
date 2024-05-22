import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

interface IFilter {
  active: string;
}

const FilterButton = styled.button<IFilter>`
  background-color: var(--color-white-0);
  border: none;
  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-red-0);
      color: var(--color-white-0);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-red-0);
    color: var(--color-white-0);
  }
`;

const StyledFilter = styled.div`
  border: 1px solid var(--color-gray-1);
  margin-top: 5rem;
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
  margin-right: 2rem;
`;

type Props = {
  filterField: string;
  options: { value: string; label: string }[];
};

const Filter: React.FC<Props> = ({ filterField, options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  const handleClick = (value: string) => {
    searchParams.set(filterField, value);

    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          active={option.value === currentFilter ? "true" : ""}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
};

export default Filter;
