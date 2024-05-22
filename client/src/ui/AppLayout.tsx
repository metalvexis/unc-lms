import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../ui/Sidebar";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 28rem 1fr;
  height: 100vh;
  background-color: var(--color-gray-0);
`;

const Main = styled.main`
  background-color: var(--color-white-0);
  padding: 4rem 4.8rem 6.4rem;
  border-radius: 4rem;
  margin: 1rem 1rem 1rem 0;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

const AppLayout: React.FC = () => {
  return (
    <StyledAppLayout>
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
