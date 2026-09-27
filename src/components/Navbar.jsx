import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">

      <div className="navbar-title">
        Student Portal
      </div>

      <div className="navbar-links">

        <Link
          to="/"
          className={`nav-link ${
            isActive("/") ? "active-nav-link" : ""
          }`}
        >
          Home
        </Link>

        <Link
          to="/courses"
          className={`nav-link ${
            isActive("/courses") ||
            location.pathname.startsWith("/courses/")
              ? "active-nav-link"
              : ""
          }`}
        >
          Courses
        </Link>

        {isLoggedIn ? (
          <>
            <Link
              to="/dashboard"
              className={`nav-link ${
                location.pathname === "/dashboard"
                  ? "active-nav-link"
                  : ""
              }`}
            >
              Dashboard
            </Link>

            <button
              onClick={handleLogout}
              className="logout-button"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className={`nav-link ${
              isActive("/login") ? "active-nav-link" : ""
            }`}
          >
            Login
          </Link>
        )}

      </div>

    </nav>
  );
}

export default Navbar;