import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAddCart = () => {
  const { user, loading } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure(`/carts?email=${user?.email}`);
      const result = res.data;
      return result;
    },
  });
  return { cart, refetch };
};

export default useAddCart;
