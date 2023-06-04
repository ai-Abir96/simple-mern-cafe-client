import { useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../../../utils/hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [allowLogin, setAllowLogin] = useState(false);
  const { login, googleSignin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(4);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password).then((res) => {
      const user = res.user;
      console.log(user);
      Swal.fire({
        icon: "success",
        title: "Logged In Successful",
      });
    });
    navigate(from, { replace: true });
  };

  const handleValidateCaptcha = (event) => {
    const captchaValue = event.target.value;
    console.log(captchaValue);
    if (validateCaptcha(captchaValue) === true) {
      setAllowLogin(true);
    } else {
      alert("Captcha Does Not Match");
      setAllowLogin(false);
    }
  };

  const handleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        const loggeduser = result.user;
        console.log(loggeduser);

        const saveUser = {
          name: loggeduser.displayName,
          email: loggeduser.email,
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully Logged In",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <div className="hero min-h-screen bg-base-200">
        <h1 className="text-5xl font-bold text-center">Login now!</h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
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
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    type="text"
                    onBlur={handleValidateCaptcha}
                    name="captcha"
                    placeholder="CAPTCHA"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    disabled={!allowLogin}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                </div>
              </form>
              <button
                onClick={handleGoogleSignin}
                className="btn btn-primary"
              >
                Google Sign In
              </button>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <img src="/images/others/authentication.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
