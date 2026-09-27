import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    login();

    navigate("/dashboard");
  };

  return (
    <main className="login-page">

      <div className="login-card">

        <h1>Student Login</h1>

        <p>
          Login to access your student dashboard.
        </p>

        <button
          onClick={handleLogin}
          className="primary-button login-button"
        >
          Login
        </button>

      </div>

    </main>
  );
}

export default Login;