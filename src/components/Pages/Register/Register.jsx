import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../utils/hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();
  const { createUser, updateUserData } = useAuth();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserData(loggedUser, data.name, data.photoURL).then(
        () => {
          console.log(data.name, data.photoURL);
          const saveUser = { name: data.name, email: data.email };
          fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result.result.insertedId);
              if (result.result.insertedId) {
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Successfully Registered",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
              navigate("/");
            });
        }
      );
    });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    {...register("photoURL")}
                    placeholder="photoURL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    {...register("email")}
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    {...register("password")}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <img src="/images/others/authentication.gif" alt="" />
          </div>
        </div>
      </div>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Register;
