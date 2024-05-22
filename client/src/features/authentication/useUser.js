import { useQuery } from "@tanstack/react-query";
import BackendAPI from "../../services/BackendApi";

export function useUser() {
  async function getUser() {
    const data = await BackendAPI.User().get("1");
    const { user } = data;

    return user;
  }

  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  return { isLoading, error, user };
}
