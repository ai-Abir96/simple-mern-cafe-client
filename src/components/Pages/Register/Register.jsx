import { Link } from "react-router-dom";
import useAuth from "../../../utils/hooks/useAuth";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  const { createUser } = useAuth();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
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
