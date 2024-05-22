import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import BackendAPI from "../../services/BackendApi";

export function useAddProgram() {
  const createProgram = async (program) => {
    const { programCode, programName } = program;
    await BackendAPI.Program().create(programCode, programName, 1);
  };

  const queryClient = useQueryClient();

  const { mutate: addProgram, isLoading: isCreating } = useMutation({
    mutationFn: createProgram,
    onSuccess: () => {
      toast.success("Program successfully added");
      queryClient.invalidateQueries({ queryKey: ["programs"] });
    },
    onError: (error) => {
      error.message.includes("Unexpected token 'V'")
        ? toast.error("Program already taken")
        : toast.error("Program Code should be less than 10 characters");
    },
  });

  return { isCreating, addProgram };
}
