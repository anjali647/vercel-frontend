// Home.js
import HeroSection from "../components/HeroSection";
import { API } from "../utils/api";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/products")
      .then(({data}) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <HeroSection />
      
      {/* Products Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="display-5 fw-bold text-dark mb-3">
                Flagship: <span className="text-primary">Burro Suite</span>
              </h2>
              <p className="lead text-muted">
                Discover our cutting-edge AI solutions designed to transform your business operations
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {loading ? (
              // Loading Skeletons
              [...Array(3)].map((_, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="card h-100 border-0 shadow-sm">
                    <div 
                      className="card-img-top bg-light placeholder-glow"
                      style={{ height: '200px' }}
                    >
                      <span className="placeholder w-100 h-100"></span>
                    </div>
                    <div className="card-body">
                      <h5 className="placeholder-glow">
                        <span className="placeholder col-6"></span>
                      </h5>
                      <p className="placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : products.length > 0 ? (
              products.slice(0, 3).map((p) => (
                <div key={p._id} className="col-lg-4 col-md-6">
                  <div className="product-card-wrapper">
                    <ProductCard p={p} />
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <div className="text-muted">
                  <i className="bi bi-box-seam fs-1 d-block mb-3"></i>
                  <h5>No products available</h5>
                  <p>Check back later for our latest offerings</p>
                </div>
              </div>
            )}
          </div>

          {products.length > 3 && (
            <div className="row mt-5">
              <div className="col-12 text-center">
                <a 
                  href="/products" 
                  className="btn btn-outline-primary btn-lg px-4 py-2 home-view-all-btn"
                  style={{
                    borderRadius: '25px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  View All Products
                  <i className="bi bi-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-5" style={{
        background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Pattern */}
        <div 
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: '0.1'
          }}
        ></div>
        
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <div className="mb-4">
                <span className="badge bg-primary-subtle text-primary px-3 py-2 rounded-pill fs-6 fw-semibold">
                  Enterprise Solutions
                </span>
              </div>
              
              <h3 className="display-6 fw-bold text-dark mb-3">
                Trusted AI Consulting & Integration
              </h3>
              
              <p className="lead text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
                We implement custom chatbots, RAG pipelines, and analytics solutions 
                tailored to your business needs with enterprise-grade security and scalability.
              </p>

              {/* Feature Icons */}
              <div className="row g-4 mt-4">
                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary-subtle mb-3"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <i className="bi bi-robot text-primary fs-4"></i>
                    </div>
                    <h6 className="fw-semibold">Custom Chatbots</h6>
                    <small className="text-muted">Intelligent conversational AI</small>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle mb-3"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <i className="bi bi-diagram-3 text-success fs-4"></i>
                    </div>
                    <h6 className="fw-semibold">RAG Pipelines</h6>
                    <small className="text-muted">Retrieval-augmented generation</small>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="text-center">
                    <div 
                      className="d-inline-flex align-items-center justify-content-center rounded-circle bg-info-subtle mb-3"
                      style={{ width: '60px', height: '60px' }}
                    >
                      <i className="bi bi-graph-up text-info fs-4"></i>
                    </div>
                    <h6 className="fw-semibold">AI Analytics</h6>
                    <small className="text-muted">Data-driven insights</small>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-5">
                <a 
                  href="/contact" 
                  className="btn btn-primary btn-lg px-4 py-3 me-3 home-primary-btn"
                  style={{
                    borderRadius: '25px',
                    fontWeight: '600',
                    boxShadow: '0 4px 15px rgba(13, 110, 253, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Get Started Today
                </a>
                <a 
                  href="/services" 
                  className="btn btn-outline-secondary btn-lg px-4 py-3 home-secondary-btn"
                  style={{
                    borderRadius: '25px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-primary mb-0">50K+</h3>
                <p className="text-light mb-0">Active Users</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-success mb-0">99.9%</h3>
                <p className="text-light mb-0">Uptime</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-warning mb-0">500+</h3>
                <p className="text-light mb-0">Integrations</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-item">
                <h3 className="display-4 fw-bold text-info mb-0">24/7</h3>
                <p className="text-light mb-0">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Converted to regular style tag */}
      <style>
        {`
          .product-card-wrapper {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .product-card-wrapper:hover {
            transform: translateY(-10px);
          }

          .stat-item {
            transition: transform 0.3s ease;
          }

          .stat-item:hover {
            transform: scale(1.05);
          }

          .home-view-all-btn:hover,
          .home-primary-btn:hover,
          .home-secondary-btn:hover {
            transform: translateY(-2px);
          }

          .home-primary-btn:hover {
            box-shadow: 0 6px 20px rgba(13, 110, 253, 0.4) !important;
          }

          .home-view-all-btn:hover {
            background: linear-gradient(135deg, #0d6efd 0%, #6f42c1 100%);
            border-color: transparent;
            box-shadow: 0 4px 15px rgba(13, 110, 253, 0.3);
          }

          .home-secondary-btn:hover {
            background: #6c757d;
            border-color: #6c757d;
            transform: translateY(-2px);
          }

          /* Loading animation for placeholders */
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.4; }
            100% { opacity: 1; }
          }

          .placeholder {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }

          /* Responsive improvements */
          @media (max-width: 768px) {
            .display-5 {
              font-size: 2rem;
            }
            
            .display-6 {
              font-size: 1.75rem;
            }
            
            .btn-lg {
              padding: 0.75rem 1.5rem;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </>
  );
}