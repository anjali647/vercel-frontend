// HeroSection.js
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    // Add CSS animations to document head
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
      @keyframes float {
        0%, 100% { 
          transform: translateY(0px) rotate(0deg); 
          opacity: 0.1; 
        }
        50% { 
          transform: translateY(-20px) rotate(180deg); 
          opacity: 0.3; 
        }
      }
      
      @keyframes pulse {
        0% { 
          opacity: 0.3; 
          transform: scale(1); 
        }
        50% { 
          opacity: 1; 
          transform: scale(1.5); 
        }
        100% { 
          opacity: 0.3; 
          transform: scale(1); 
        }
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

  const heroStyles = {
    section: {
      background: `linear-gradient(135deg, rgba(79, 70, 229, 0.7) 0%, rgba(147, 51, 234, 0.7) 100%), 
                   url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80') center/cover`,
      minHeight: '500px'
    },
    floatingContainer: {
      zIndex: 1, 
      pointerEvents: 'none'
    },
    contentContainer: {
      zIndex: 2
    },
    title: {
      textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
    },
    exploreBtn: {
      boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease'
    },
    salesBtn: {
      boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease'
    }
  };

  const floatingElements = [
    { emoji: '🤖', top: '20%', left: '10%', delay: '0s' },
    { emoji: '⚡', top: '60%', left: '5%', delay: '2s' },
    { emoji: '🧠', top: '30%', right: '15%', delay: '4s' },
    { emoji: '💡', top: '70%', right: '10%', delay: '1s' },
    { emoji: '📊', top: '40%', left: '50%', delay: '3s' }
  ];

  const pulseDots = [
    { top: '25%', left: '20%', delay: '0s' },
    { top: '45%', right: '25%', delay: '0.5s' },
    { bottom: '30%', left: '15%', delay: '1s' },
    { bottom: '50%', right: '20%', delay: '1.5s' }
  ];

  const handleButtonHover = (e, isEntering) => {
    if (isEntering) {
      e.target.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.3)';
      e.target.style.transform = 'translateY(-2px)';
    } else {
      e.target.style.boxShadow = '0 4px 15px rgba(255, 255, 255, 0.2)';
      e.target.style.transform = 'translateY(0)';
    }
  };

  return (
    <section 
      className="py-5 text-white position-relative overflow-hidden" 
      style={heroStyles.section}
    >
      {/* Floating AI Elements */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100" 
        style={heroStyles.floatingContainer}
      >
        {/* Floating Icons */}
        {floatingElements.map((element, index) => (
          <div 
            key={index}
            className="position-absolute text-white-50" 
            style={{
              top: element.top,
              left: element.left,
              right: element.right,
              fontSize: '2rem',
              animation: `float 6s ease-in-out infinite ${element.delay}`
            }}
          >
            {element.emoji}
          </div>
        ))}

        {/* Pulse Dots */}
        {pulseDots.map((dot, index) => (
          <div 
            key={index}
            className="position-absolute bg-white rounded-circle" 
            style={{
              top: dot.top,
              bottom: dot.bottom,
              left: dot.left,
              right: dot.right,
              width: '8px', 
              height: '8px',
              animation: `pulse 2s infinite ${dot.delay}`
            }}
          />
        ))}
      </div>

      <div className="container py-5 position-relative" style={heroStyles.contentContainer}>
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center py-5">
            <h1 
              className="display-2 fw-bold mb-4" 
              style={heroStyles.title}
            >
              Ship AI faster with <span className="text-decoration-underline">Burro</span>
            </h1>
            <p className="lead mb-5 opacity-75">
              A unified AI platform for chat, automation and analytics—built for teams.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <Link 
                to="/products" 
                className="btn btn-light btn-lg px-4 py-3 text-dark fw-semibold"
                style={heroStyles.exploreBtn}
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                Explore Products
              </Link>
              <Link 
                to="/contact" 
                className="btn btn-outline-light btn-lg px-4 py-3 fw-semibold"
                style={heroStyles.salesBtn}
                onMouseEnter={(e) => handleButtonHover(e, true)}
                onMouseLeave={(e) => handleButtonHover(e, false)}
              >
                Talk to Sales
              </Link>
            </div>

            {/* Optional: Stats Section */}
            <div className="row mt-5 pt-4">
              <div className="col-md-4">
                <div className="text-center">
                  <div className="display-6 fw-bold">50K+</div>
                  <small className="text-light opacity-75">Active Users</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="display-6 fw-bold">99.9%</div>
                  <small className="text-light opacity-75">Uptime</small>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="display-6 fw-bold">24/7</div>
                  <small className="text-light opacity-75">Support</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}