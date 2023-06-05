import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCheckAdmin = () => {
  const { user } = useAuth();
  const { axiosSecure } = useAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/admin/${user?.email}`);
      console.log(res);
      const result = res.data.result.admin;
      return result;
    },
  });
  return { isAdmin, isAdminLoading };
};

export default useCheckAdmin;
