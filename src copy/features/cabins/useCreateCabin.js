import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export function useCreateCabin() {
  function errString(err) {
    const errorMsg = err.response.data.message;
    const match = errorMsg.match(/dup key: { name: "(.*?)" }/);
    const name = match ? match[1] : null;

    // console.log(name); // 👉 "copy of 002"
    return name;
  }

  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createCabinApi,
    // mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created!");

      queryClient.invalidateQueries({
        queryKey: ["cabins"],
      });
    },

    onError: (err) => {
      const error = err.response.data.message.includes("duplicate key")
        ? `Duplicate key Name: "${errString(err)}" `
        : err.response.data.message;
      // console.log(err);
      toast.error(error);
    },
  });
  return { isCreating, createCabin };
}
