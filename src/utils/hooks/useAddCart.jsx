import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAddCart = () => {
  const { user } = useAuth();
  const {
    isLoading,
    refetch,
    data: cart = [],
  } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://bristo-server-ai-abir96.vercel.app/carts?email=${user?.email}`
      );
      const result = res.json();
      return result;
    },
  });
  return { cart, isLoading, refetch };
};

export default useAddCart;
