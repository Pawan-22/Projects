import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("loggedIn");
    const email = localStorage.getItem("loggedInUserEmail");

    if (isLoggedIn && email) {
      // Retrieve existing users from local storage
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const loggedUser = users.find((user) => user.email === email);
      setUserInfo(loggedUser);
      setEditInput(loggedUser);
    } else {
      // Redirect to login if not logged in
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("loggedInUserEmail");
    navigate("/login");
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditInput({
      ...editInput,
      [name]: value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Retrieve existing users from local storage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // Update the user in the users array
    const updatedUsers = users.map((user) =>
      user.email === userInfo.email ? editInput : user
    );
    // Save the updated users array to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    // Update loggedInUserEmail in local storage if email was changed
    if (userInfo.email !== editInput.email) {
      localStorage.setItem("loggedInUserEmail", editInput.email);
    }
    // Update the userInfo state
    setUserInfo(editInput);
    setIsEditing(false);
  };

  return (
    <>
      <section className="vh-100">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Homepage
                    </h2>
                    {userInfo ? (
                      isEditing ? (
                        <form onSubmit={handleSave}>
                          <div className="form-outline mb-4">
                            <input
                              type="text"
                              id="form3Example1cg"
                              className="form-control form-control-lg"
                              name="name"
                              value={editInput.name}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1cg"
                            >
                              Your Name
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              id="form3Example3cg"
                              className="form-control form-control-lg"
                              name="email"
                              value={editInput.email}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3cg"
                            >
                              Your Email
                            </label>
                          </div>
                          <div className="form-outline mb-4">
                            <input
                              type="number"
                              id="form3Example4cg"
                              className="form-control form-control-lg"
                              name="phone"
                              value={editInput.phone}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4cg"
                            >
                              Your Phone Number
                            </label>
                          </div>
                          <div className="d-flex justify-content-center">
                            <button
                              type="submit"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      ) : (
                        <>
                          <p className="text-center">Welcome {userInfo.name}</p>
                          <p className="text-center">
                            Your Email: {userInfo.email}
                          </p>
                          <p className="text-center">
                            Your Phone Number: {userInfo.phone}
                          </p>
                          <div className="d-flex justify-content-center">
                            <button
                              onClick={handleEdit}
                              type="button"
                              className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body text-white me-2"
                            >
                              Edit Profile
                            </button>
                            <button
                              onClick={handleLogout}
                              type="button"
                              className="btn btn-success btn-block btn-lg gradient-custom-4 text-body text-white ms-2"
                            >
                              Logout
                            </button>
                          </div>
                        </>
                      )
                    ) : (
                      <p className="text-center">Loading...</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
