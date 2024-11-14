import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { InferResponseType, InferRequestType } from "hono";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { client } from "@/lib/client";

type ResponseType = InferResponseType<typeof client.api.auth.login.$post>;
type RequestType = InferRequestType<typeof client.api.auth.login.$post>;

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationKey: ["current"],
    mutationFn: async ({ json }) => {
      const response = await client.api.auth.login.$post({ json });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      return await response.json();
    },
    onSuccess: () => {
      toast.success("Logged in");
      router.refresh();
      queryClient.invalidateQueries({ queryKey: ["current"] });
    },
    onError: () => {
      toast.error("Failed to login");
    },
  });

  return mutation;
};
