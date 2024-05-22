import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { BsGear } from "react-icons/bs";
import { MdOutlineLogout } from "react-icons/md";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding-top: 1.25rem;
  line-height: 1.8rem;
`;

// const NavLine = styled.hr`
//   border: 0.5px solid var(--color-red-0);
//   width: 100%;
// `;

const BottomNavContainer = styled.div`
  margin-top: auto;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
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

const BottomNav: React.FC = () => {
  return (
    <BottomNavContainer>
      {/* <NavLine /> */}
      <nav>
        <NavList>
          <li>
            <StyledNavLink to="/settings">
              <BsGear />
              <span>Settings</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/login">
              <MdOutlineLogout />
              <span>Logout</span>
            </StyledNavLink>
          </li>
        </NavList>
      </nav>
    </BottomNavContainer>
  );
};

export default BottomNav;
