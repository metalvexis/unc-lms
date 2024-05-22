import styled from "styled-components";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  justify-content: center;
`;

const LoginFormLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const LoginTitle = styled.div`
  background-color: var(--color-gray-0);
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 5rem;
`;

const SystemFullName = styled.div`
  color: var(--color-white-0);
  position: relative;
  top: 200px;
`;

const Login: React.FC = () => {
  return (
    <LoginLayout>
      <LoginTitle>
        <Logo imageSize={20} textSize={4.4} textLineHeight={4.4} />
        <SystemFullName>
          Outcome-based Education and Continuous Quality Improvement
        </SystemFullName>
      </LoginTitle>
      <LoginFormLayout>
        <Heading as="h4">Log in</Heading>
        <LoginForm />
      </LoginFormLayout>
    </LoginLayout>
  );
};

export default Login;
