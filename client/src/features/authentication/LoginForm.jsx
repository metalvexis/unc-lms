import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";

function LoginForm() {
  const [username, setUsername] = useState("1034");
  const [password, setPassword] = useState("password!");
  const { loginMutate, isLoading } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    loginMutate({ username, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Username" marginTop={0}>
        <Input
          type="text"
          id="username"
          autoComplete="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your username"
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password" marginTop={0}>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical marginTop={5}>
        <Button size="large">{isLoading ? <SpinnerMini /> : "Login"}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
