import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "axios";
import { useEffect } from "react";

const useAxiosSecure = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("bristo-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    axiosSecure.interceptors.response.use(
      (res) => res,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 ||
            error.response.status === 403)
        ) {
          await logout();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [logout, navigate, axiosSecure]);
  return { axiosSecure };
};

export default useAxiosSecure;
