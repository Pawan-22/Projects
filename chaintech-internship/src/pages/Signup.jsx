import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user already exists
    const userExists = users.some((user) => user.email === input.email);

    if (userExists) {
      alert("User already exists");
    } else {
      // Add new user to the array
      users.push(input);

      // Update local storage
      localStorage.setItem("users", JSON.stringify(users));

      // Redirect to login page
      navigate("/login");
    }
  };

  return (
    <section className="overflow-auto vh-100">
      <Header />
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example1cg"
                        className="form-control form-control-lg"
                        name="name"
                        value={input.name}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example2cg"
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
                      <label className="form-label" htmlFor="form3Example2cg">
                        Your Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        id="form3Example3cg"
                        className="form-control form-control-lg"
                        name="phone"
                        value={input.phone}
                        onChange={(e) =>
                          setInput({
                            ...input,
                            [e.target.name]: e.target.value,
                          })
                        }
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Phone Number
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
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Already have an account?
                      <Link to="/login" className="fw-bold text-body">
                        <u>Login here</u>
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

export default Signup;
