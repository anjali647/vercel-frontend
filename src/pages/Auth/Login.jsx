import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setIsLoading(true);
    
    try {
      await login(email, password);
      nav("/");
    } catch (e) {
      setErr(e?.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light py-5">
      <div className="card shadow-lg p-4 p-md-5 border-0" style={{ width: "100%", maxWidth: "450px", borderRadius: "16px" }}>
        <div className="text-center mb-4">
          <h2 className="fw-bold text-dark mb-2">Welcome Back</h2>
          <p className="text-muted">Sign in to your account</p>
        </div>

        {err && (
          <div className="alert alert-danger py-2 d-flex align-items-center">
            <i className="bi bi-exclamation-circle-fill me-2"></i>
            {err}
          </div>
        )}

        <form onSubmit={submit} className="needs-validation" noValidate>
          <div className="mb-3">
            <label className="form-label fw-semibold text-dark">Email Address</label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control form-control-lg border-secondary"
              style={{ backgroundColor: '#f8f9fa' }}
              disabled={isLoading}
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-dark">Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control form-control-lg border-secondary"
              style={{ backgroundColor: '#f8f9fa' }}
              disabled={isLoading}
            />
            <div className="text-end mt-2">
              <Link to="/forgot-password" className="text-decoration-none text-primary small">
                Forgot Password?
              </Link>
            </div>
          </div>

          <button 
            className="btn btn-primary w-100 py-3 fw-semibold rounded-pill"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Signing in...
              </>
            ) : (
              <>
                <i className="bi bi-box-arrow-in-right me-2"></i>
                Sign In
              </>
            )}
          </button>
        </form>

        <div className="text-center mt-4 pt-3 border-top">
          <p className="text-muted mb-0">
            Don't have an account?{" "}
            <Link to="/register" className="text-decoration-none fw-semibold text-primary">
              Create Account
            </Link>
          </p>
        </div>
      </div>

      <style jsx>{`
        .form-control:focus {
          border-color: #0d6efd;
          box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
          background-color: #ffffff !important;
        }
        
        .form-control::placeholder {
          color: #6c757d;
          opacity: 0.7;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #0d6efd 0%, #0a58ca 100%);
          border: none;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(13, 110, 253, 0.4);
        }
        
        .card {
          background: #ffffff;
        }
        
        .min-vh-100 {
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
}