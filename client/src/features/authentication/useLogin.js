import { useMutation } from "@tanstack/react-query";
import BackendAPI from "../../services/BackendApi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();

  async function login({ username, password }) {
    const { user } = await BackendAPI.login(username, password);
    return user;
  }

  const { mutate: loginMutate, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      if (user) navigate("/programs");
      if (!user) toast.error("Username or password is incorrect");
    },
  });

  return { loginMutate, isLoading };
}
