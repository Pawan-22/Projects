import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user exists
    const loggedUser = users.find(
      (user) => user.email === input.email && user.password === input.password
    );

    if (loggedUser) {
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("loggedInUserEmail", loggedUser.email);
      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <section className="vh-100">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>
                  <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        name="email"
                        value={input.email}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        name="password"
                        value={input.password}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Your Password
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Dont have an account?
                      <Link to="/signup" className="fw-bold text-body">
                        <u>Sign up here</u>
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
