import "./Header.css";
import main_logo from "../../assets/healthcare logo.jpeg";

const Header = () => {
  return (
    <header className="header">
      <img src={main_logo} alt="Logo" className="logo" />
      <h1 className="title">HealthCare Services</h1>
      <nav className="nav">
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
