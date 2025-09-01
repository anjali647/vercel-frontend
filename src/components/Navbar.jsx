import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Inline styles object for better organization
  const styles = {
    navbar: {
      background: isScrolled 
        ? 'rgba(33, 37, 41, 0.95)' 
        : 'rgba(33, 37, 41, 1)',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      boxShadow: isScrolled 
        ? '0 2px 20px rgba(0, 0, 0, 0.3)' 
        : 'none',
      transition: 'all 0.3s ease-in-out',
      padding: isScrolled ? '0.5rem 1.5rem' : '1rem 1.5rem',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1030,
      width: '100%'
    },
    brand: {
      transition: 'all 0.3s ease',
      textShadow: '0 0 10px rgba(0, 123, 255, 0.3)'
    },
    navToggler: {
      boxShadow: 'none',
      transition: 'all 0.3s ease',
      border: 'none'
    },
    userGreeting: {
      fontSize: '0.9rem',
      opacity: '0.9',
      transition: 'opacity 0.3s ease'
    },
    logoutBtn: {
      transition: 'all 0.3s ease',
      borderRadius: '20px',
      padding: '0.375rem 1rem'
    },
    loginLink: {
      transition: 'all 0.3s ease',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      fontWeight: '500'
    },
    getStartedBtn: {
      background: 'linear-gradient(135deg, #0d6efd 0%, #6f42c1 100%)',
      border: 'none',
      borderRadius: '20px',
      padding: '0.5rem 1.25rem',
      fontWeight: '600',
      boxShadow: '0 2px 10px rgba(13, 110, 253, 0.3)',
      transition: 'all 0.3s ease'
    },
    spacer: {
      height: isScrolled ? '70px' : '80px',
      transition: 'height 0.3s ease'
    }
  };

  const getNavLinkStyle = (isActive) => ({
    position: 'relative',
    color: isActive ? '#0d6efd' : '#f8f9fa',
    fontWeight: isActive ? '600' : '500',
    transition: 'all 0.3s ease',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    background: isActive ? 'rgba(13, 110, 253, 0.15)' : 'transparent'
  });

  useEffect(() => {
    // Add CSS styles to document head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      .brand-hover:hover {
        transform: translateY(-2px);
        text-shadow: 0 0 15px rgba(0, 123, 255, 0.5) !important;
      }

      .nav-link-custom {
        position: relative;
        overflow: hidden;
      }

      .nav-link-custom::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #0d6efd, #6f42c1);
        transition: all 0.3s ease;
        transform: translateX(-50%);
      }

      .nav-link-custom:hover::before,
      .nav-link-custom.active::before {
        width: 80%;
      }

      .nav-link-custom:hover {
        color: #0d6efd !important;
        background: rgba(13, 110, 253, 0.1) !important;
        transform: translateY(-1px);
      }

      .login-link:hover {
        color: #0d6efd !important;
        background: rgba(13, 110, 253, 0.1);
        transform: translateY(-1px);
      }

      .logout-btn:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: #0d6efd;
        color: #0d6efd !important;
        transform: translateY(-1px);
        box-shadow: 0 4px 15px rgba(13, 110, 253, 0.2);
      }

      .get-started-btn:hover {
        background: linear-gradient(135deg, #0b5ed7 0%, #5a2d91 100%) !important;
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(13, 110, 253, 0.4) !important;
      }

      .user-greeting:hover {
        opacity: 1;
      }

      /* Mobile Responsiveness */
      @media (max-width: 991.98px) {
        .navbar-nav {
          background: rgba(0, 0, 0, 0.9);
          border-radius: 10px;
          padding: 1rem;
          margin-top: 1rem;
          backdrop-filter: blur(10px);
        }
        
        .nav-link-custom {
          margin: 0.25rem 0 !important;
          text-align: center;
        }
        
        .auth-controls {
          flex-direction: column;
          gap: 1rem !important;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
      }

      /* Smooth animations */
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Navbar toggler custom styling */
      .navbar-toggler:focus {
        box-shadow: none;
      }

      .navbar-toggler:hover {
        background: rgba(255, 255, 255, 0.1);
      }
    `;
    
    document.head.appendChild(styleSheet);
    
    // Cleanup function to remove styles when component unmounts
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, []);

  return (
    <>
      <nav 
        className="navbar navbar-expand-lg navbar-dark px-4"
        style={styles.navbar}
      >
        <div className="container-fluid">
          <Link 
            to="/" 
            className="navbar-brand fw-bold fs-4 brand-hover"
            style={styles.brand}
          >
            Burro<span className="text-primary">AI</span>
          </Link>
          
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            style={styles.navToggler}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              {[
                {path: "/products", label: "Products"},
                {path: "/services", label: "Services"}, 
                {path: "/blogs", label: "Blogs"},
                {path: "/about", label: "About"},
                {path: "/contact", label: "Contact"}
              ].map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({isActive}) => 
                    `nav-link mx-2 nav-link-custom ${isActive ? "active" : ""}`
                  }
                  style={({isActive}) => getNavLinkStyle(isActive)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            
            <div className="d-flex align-items-center gap-3 auth-controls">
              {user ? (
                <>
                  <span 
                    className="text-light-emphasis user-greeting"
                    style={styles.userGreeting}
                  >
                    Hi, {user.name}
                  </span>
                  <button 
                    onClick={logout} 
                    className="btn btn-outline-light btn-sm logout-btn"
                    style={styles.logoutBtn}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-light text-decoration-none login-link"
                    style={styles.loginLink}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn btn-primary btn-sm get-started-btn"
                    style={styles.getStartedBtn}
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer div to prevent content from hiding behind fixed navbar */}
      <div style={styles.spacer}></div>
    </>
  );
}