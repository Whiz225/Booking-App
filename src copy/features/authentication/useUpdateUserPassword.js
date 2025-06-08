import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCurrentUserPassword } from "../../services/apiAuth";

export function useUpdateUserPassword() {
  const queryClient = useQueryClient();

  const { mutate: updateUserPassword, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUserPassword,
    onSuccess: ({ user }) => {
      toast.success("User password successfully updated");
      queryClient.setQueryData(["user"], user);
    },
    onError: (err) => toast.error(err.response.data.message),
  });

  return { updateUserPassword, isUpdating };
}
