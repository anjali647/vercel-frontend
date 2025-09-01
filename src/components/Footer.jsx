// Footer.js
export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">
      {/* Main Footer Content */}
      <div className="py-5" style={{
        background: 'linear-gradient(135deg, #212529 0%, #343a40 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div 
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8zm0-20c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: '0.1'
          }}
        ></div>

        <div className="container position-relative">
          <div className="row g-4 g-lg-5">
            {/* Brand Section */}
            <div className="col-lg-4 col-md-6">
              <div className="brand-section">
                <h4 className="fw-bold mb-3 text-white">
                  <span className="text-white">Burro</span>
                  <span className="text-primary">AI</span>
                </h4>
                <p className="text-white-70 mb-4" style={{ lineHeight: '1.6' }}>
                  AI that carries your workload—securely, reliably. 
                  Transform your business with cutting-edge artificial intelligence solutions.
                </p>
                
                {/* Social Media Links */}
                <div className="d-flex gap-3">
                  <a 
                    href="#" 
                    className="social-link d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    aria-label="Twitter"
                  >
                    <i className="bi bi-twitter fs-5"></i>
                  </a>
                  <a 
                    href="#" 
                    className="social-link d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    aria-label="LinkedIn"
                  >
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                  <a 
                    href="#" 
                    className="social-link d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
                    aria-label="GitHub"
                  >
                    <i className="bi bi-github fs-5"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Company Section */}
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-section">
                <h6 className="fw-semibold mb-3 text-white">Company</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/about" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      About Us
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/careers" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Careers
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/contact" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Contact
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/press" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Products Section */}
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-section">
                <h6 className="fw-semibold mb-3 text-white">Products</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/products" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      AI Suite
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/services" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Services
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/integrations" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Integrations
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/pricing" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Resources Section */}
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-section">
                <h6 className="fw-semibold mb-3 text-white">Resources</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="/docs" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Documentation
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/blogs" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Blog
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/security" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Security
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="/support" className="footer-link text-white-70 text-decoration-none">
                      <i className="bi bi-chevron-right me-1" style={{ fontSize: '0.75rem' }}></i>
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="col-lg-2 col-md-3 col-6">
              <div className="footer-section">
                <h6 className="fw-semibold mb-3 text-white">Stay Updated</h6>
                <p className="small text-white-70 mb-3">
                  Get the latest AI insights and product updates.
                </p>
                <div className="mb-3">
                  <div className="input-group input-group-sm">
                    <input 
                      type="email" 
                      className="form-control border-0 text-white"
                      placeholder="Enter email"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: '#ffffff',
                        borderRadius: '20px 0 0 20px'
                      }}
                    />
                    <button 
                      className="btn btn-primary px-3"
                      type="button"
                      style={{
                        borderRadius: '0 20px 20px 0',
                        border: 'none'
                      }}
                    >
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-top border-secondary py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0 small text-white-70">
                © {new Date().getFullYear()} BurroAI. All rights reserved.
              </p>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-md-end justify-content-start gap-4 mt-2 mt-md-0">
                <a href="/privacy" className="small text-white-70 text-decoration-none footer-link">
                  Privacy Policy
                </a>
                <a href="/terms" className="small text-white-70 text-decoration-none footer-link">
                  Terms of Service
                </a>
                <a href="/cookies" className="small text-white-70 text-decoration-none footer-link">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .footer-link:hover {
          color: #0d6efd !important;
          transform: translateX(3px);
        }

        .footer-link:hover .bi-chevron-right {
          transform: translateX(2px);
        }

        .social-link:hover {
          background: #0d6efd !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
        }

        .brand-section h4:hover {
          transform: translateY(-1px);
          transition: transform 0.3s ease;
        }

        .footer-section {
          transition: transform 0.3s ease;
        }

        .footer-section:hover {
          transform: translateY(-2px);
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.6) !important;
        }

        .form-control:focus {
          background: rgba(255, 255, 255, 0.15) !important;
          box-shadow: none !important;
          color: #ffffff !important;
        }

        .btn-primary:hover {
          background: #0b5ed7 !important;
          transform: scale(1.05);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .row.g-4.g-lg-5 > * {
            margin-bottom: 2rem;
          }
          
          .social-link {
            width: 35px !important;
            height: 35px !important;
          }
          
          .brand-section h4 {
            font-size: 1.5rem;
          }
        }

        /* Smooth animations */
        * {
          transition: all 0.3s ease;
        }
      `}</style>
    </footer>
  );
}