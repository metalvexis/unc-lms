import { useQuery } from "@tanstack/react-query";
import BackendAPI from "../../services/BackendApi";

export function usePrograms() {
  async function getPrograms() {
    const data = await BackendAPI.Program().get();
    const { program } = data;

    return program;
  }

  const {
    isLoading,
    data: programs,
    error,
  } = useQuery({
    queryKey: ["programs"],
    queryFn: getPrograms,
  });

  return { isLoading, error, programs };
}
