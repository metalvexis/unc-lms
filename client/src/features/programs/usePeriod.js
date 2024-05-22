import { useQuery } from "@tanstack/react-query";
import BackendAPI from "../../services/BackendApi";

export function usePeriod() {
  async function getPeriod() {
    const data = await BackendAPI.Period().get();
    const { period } = data;

    return period;
  }

  const { data: period } = useQuery({
    queryKey: ["period"],
    queryFn: getPeriod,
  });

  return { period };
}
