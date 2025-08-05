import { useState, useEffect } from "react";
import "./Index.css";

export default function Index() {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [agreement1, setAgreement1] = useState(false);
  const [agreement2, setAgreement2] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel background images
  const carouselImages = [
    "/Citizen-redesign.png?width=3070",
    "/Citizen-Tree.png?width=3070", 
    "/Citizen-bot.png?width=3070",
    "/Citizen-Scheme.png?width=3070",
    "/Citizen-Dashboard.png?width=3070"
  ];

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Carousel Background */}
        <div className="hero-background">
          <div className="carousel-container">
            {carouselImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Hero Background ${index + 1}`}
                className={`carousel-image ${index === currentSlide ? 'active' : 'inactive'}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`carousel-dot ${index === currentSlide ? 'active' : 'inactive'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          {/* Login Form */}
          <div className="login-form-container">
            <h2 className="login-title">Login to Citizen Service</h2>
            
            <form className="login-form">
              {/* Aadhaar Number Input */}
              <div className="input-group">
                <label className="input-label">
                  Enter Aadhaar Number
                </label>
                <input
                  type="text"
                  value={aadhaarNumber}
                  onChange={(e) => setAadhaarNumber(e.target.value)}
                  placeholder="Enter Aadhaar Number"
                  className="input-field"
                />
              </div>

              {/* Agreements */}
              <div className="agreements-section">
                <div className="agreement-item">
                  <input
                    type="checkbox"
                    id="agreement1"
                    checked={agreement1}
                    onChange={(e) => setAgreement1(e.target.checked)}
                    className="agreement-checkbox"
                  />
                  <label htmlFor="agreement1" className="agreement-label">
                    I acknowledge that my Aadhaar number is to be used for verification and is to be submitted to the Central Identity Data Repository. Declaration:- I am a citizen of Jharkhand state. I am over 18 years of age. I hereby agree to authenticate myself through Aadhaar based authentication system.
                  </label>
                </div>

                <div className="agreement-item">
                  <input
                    type="checkbox"
                    id="agreement2"
                    checked={agreement2}
                    onChange={(e) => setAgreement2(e.target.checked)}
                    className="agreement-checkbox"
                  />
                  <label htmlFor="agreement2" className="agreement-label">
                    I authorize UDDP and citizen service to access scheme related information from the scheme delivery agency, on my behalf. I understand that this information will be used for better service delivery to me.
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="buttons-section">
                <button
                  type="button"
                  className="login-button primary"
                >
                  Request OTP
                </button>
                
                <button
                  type="button"
                  className="login-button secondary"
                >
                  Biometric Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
