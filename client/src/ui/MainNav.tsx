import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PiSquaresFourBold } from "react-icons/pi";
import { BsBuildingGear } from "react-icons/bs";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 1.25rem;
  line-height: 1.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-white-0);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &.active:link,
  &.active:visited {
    color: var(--color-white-0);
    background: var(--gradient-color-0);
    border-radius: var(--border-radius-sm);
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 0px; */
  }

  &:hover,
  &:active {
    background-color: var(--color-gray-1);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-white-0);
  }
`;

const MainNav: React.FC = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/programs">
            <PiSquaresFourBold />
            <span>Programs</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/program-curriculum-record">
            <BsBuildingGear />
            <span>
              Program <br /> Curriculum Record
            </span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
