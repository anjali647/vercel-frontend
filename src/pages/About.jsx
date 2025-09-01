import React, { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [cardAnimations, setCardAnimations] = useState([false, false, false]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    const cardTimers = [
      setTimeout(() => setCardAnimations(prev => [true, prev[1], prev[2]]), 300),
      setTimeout(() => setCardAnimations(prev => [prev[0], true, prev[2]]), 500),
      setTimeout(() => setCardAnimations(prev => [prev[0], prev[1], true]), 700)
    ];
    return () => {
      clearTimeout(timer);
      cardTimers.forEach(clearTimeout);
    };
  }, []);

  const cardData = [
    { title: "Values", description: "Privacy-first, Reliable, Helpful.", icon: "🎯", color: "primary" },
    { title: "Security", description: "SOC2 roadmap, data encryption, RBAC.", icon: "🔒", color: "success" },
    { title: "Support", description: "Dedicated success for Pro & Enterprise.", icon: "🤝", color: "info" }
  ];

  return (
    <>
      <style>{`
        .fade-in-up { 
          opacity: 0; 
          transform: translateY(30px); 
          transition: all 0.8s ease; 
        }
        .fade-in-up.visible { 
          opacity: 1; 
          transform: translateY(0); 
        }
        .card-animate { 
          opacity: 0; 
          transform: translateY(20px) scale(0.95); 
          transition: all 0.6s ease; 
        }
        .card-animate.visible { 
          opacity: 1; 
          transform: translateY(0) scale(1); 
        }
        .gradient-text {
          background: linear-gradient(90deg, #0d6efd, #6f42c1, #20c997);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% auto;
          animation: gradient-move 4s linear infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .emoji { 
          transition: transform 0.3s; 
          display: inline-block; 
        }
        .emoji:hover { 
          transform: scale(1.2) rotate(5deg); 
        }
        .feature-card {
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1) !important;
        }
        .cta-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border: none;
          border-radius: 1rem;
        }
      `}</style>

      <div className="bg-light min-vh-100 py-5">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* Header */}
          <div className={`text-center mb-5 fade-in-up ${isVisible ? 'visible' : ''}`}>
            <h1 className="display-4 fw-bold gradient-text mb-3">About Burro</h1>
            <div className="bg-white rounded-4 p-4 shadow-sm border-start border-4 border-primary">
              <p className="lead text-muted mb-2">
                Burro is an AI product suite that helps teams chat with data, automate workflows, 
                and surface insights.
              </p>
              <p className="text-muted mb-0">
                Our mission is to carry your workload—like a trusty burro{' '}
                <span className="emoji" role="img" aria-label="donkey">🫏</span>
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="row g-4">
            {cardData.map((card, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className={`card h-100 text-center shadow-sm border-0 card-animate feature-card ${cardAnimations[index] ? 'visible' : ''}`}
                >
                  <div className="card-body p-4">
                    <div className={`display-5 mb-3 text-${card.color}`} role="img" aria-label={card.title}>{card.icon}</div>
                    <h5 className="fw-bold">{card.title}</h5>
                    <p className="text-muted">{card.description}</p>
                    <div className="mt-3">
                      <a href="#" className={`text-${card.color} fw-semibold text-decoration-none`}>
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={`mt-5 fade-in-up ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '1s' }}>
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="card cta-card shadow-lg">
                  <div className="card-body text-center p-5">
                    <h3 className="fw-bold mb-3">Ready to get started?</h3>
                    <p className="text-muted mb-4">
                      Join thousands of teams already using Burro to streamline workflows 
                      and unlock the power of their data.
                    </p>
                    <div className="d-flex gap-3 justify-content-center flex-wrap">
                      <button className="btn btn-primary btn-lg rounded-pill px-4">Start Free Trial</button>
                      <button className="btn btn-outline-secondary btn-lg rounded-pill px-4">Schedule Demo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}