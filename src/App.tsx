import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, MapPin, ChevronRight, Building2, FileText, Calculator, Users, Briefcase, Shield, TrendingUp } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Expert SEZ & STPI Consultancy",
      subtitle: "Comprehensive compliance and strategic advisory services",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400"
    },
    {
      title: "GST & Tax Compliance Made Simple",
      subtitle: "Professional tax solutions for your business growth",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1400"
    },
    {
      title: "Complete Payroll & Labour Law Services",
      subtitle: "Streamline your HR operations with expert guidance",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1400"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "SEZ Services",
      description: "Complete Special Economic Zone compliance, approvals, and operational support for export-oriented units."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "STPI & 100% EOU",
      description: "Software Technology Parks of India and Export Oriented Unit registration, compliance, and consulting services."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "DGFT Services",
      description: "Import-Export Code, EPCG, Advance Authorization, and comprehensive DGFT licensing solutions."
    },
    {
      icon: <Calculator className="w-12 h-12" />,
      title: "GST Compliance",
      description: "End-to-end GST registration, filing, refunds, audits, and advisory services for seamless compliance."
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Income Tax Returns",
      description: "Individual income tax planning, filing, and optimization services by certified professionals."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Payroll Services",
      description: "Comprehensive payroll processing, statutory compliance, and employee benefits management."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Labour Law Compliance",
      description: "Complete labour law advisory, statutory registrations, and ongoing compliance management."
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Business Advisory",
      description: "Strategic business consulting for regulatory compliance, process optimization, and growth planning."
    }
  ];

  return (
    <div className="landing-page">
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="#home">
            <Building2 className="brand-icon" />
            <span className="brand-text">Elite Managed Services</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
            <a href="#contact" className="btn btn-primary ms-lg-3">Get Started</a>
          </div>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-overlay"></div>
            </div>
          ))}
        </div>
        <div className="container hero-content">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="hero-title">{slides[activeSlide].title}</h1>
              <p className="hero-subtitle">{slides[activeSlide].subtitle}</p>
              <div className="hero-buttons">
                <a href="#services" className="btn btn-primary btn-lg">Our Services</a>
                <a href="#contact" className="btn btn-outline-light btn-lg ms-3">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="legislative-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="info-card">
                <h3>Expert Consultation</h3>
                <p>Over a decade of experience in regulatory compliance and business advisory services across India.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card">
                <h3>Comprehensive Solutions</h3>
                <p>From SEZ to labour laws, we provide end-to-end compliance and operational support for your business.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info-card">
                <h3>Trusted Partner</h3>
                <p>Serving businesses across Delhi NCR with dedicated support and personalized service excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive compliance and consulting solutions for your business</p>
          </div>
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <a href="#contact" className="service-link">
                    Learn More <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Elite Managed Services Team"
                className="about-image"
              />
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="section-title">About Elite Managed Services</h2>
                <p className="about-text">
                  Elite Managed Services is a leading consultancy firm specializing in regulatory compliance,
                  tax services, and business advisory. Based in Delhi NCR, we provide comprehensive solutions
                  for businesses operating in Special Economic Zones, STPI units, and export-oriented operations.
                </p>
                <p className="about-text">
                  Our team of experienced professionals is dedicated to simplifying complex regulatory requirements,
                  ensuring compliance, and enabling businesses to focus on growth. From SEZ approvals to GST compliance,
                  payroll management to labour law adherence, we are your trusted partner in business success.
                </p>
                <div className="about-stats">
                  <div className="stat-item">
                    <h3>500+</h3>
                    <p>Clients Served</p>
                  </div>
                  <div className="stat-item">
                    <h3>10+</h3>
                    <p>Years Experience</p>
                  </div>
                  <div className="stat-item">
                    <h3>100%</h3>
                    <p>Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We're here to help your business succeed</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="contact-card">
                <Phone className="contact-icon" />
                <h3>Phone</h3>
                <p><a href="tel:+919910806694">+91 99108 06694</a></p>
                <p className="contact-name">Prem Kumar</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-card">
                <Mail className="contact-icon" />
                <h3>Email</h3>
                <p><a href="mailto:prem.kumar@elites.co.in">prem.kumar@elites.co.in</a></p>
                <p><a href="mailto:info@elitemanagedservices.co.in">info@elitemanagedservices.co.in</a></p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="contact-card">
                <MapPin className="contact-icon" />
                <h3>Location</h3>
                <p>Delhi NCR, India</p>
                <p className="mt-2"><a href="https://www.elites.co.in" target="_blank" rel="noopener noreferrer">www.elites.co.in</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="footer-title">Elite Managed Services</h5>
              <p className="footer-text">
                Your trusted partner for SEZ, STPI, GST compliance, and comprehensive business advisory services in Delhi NCR.
              </p>
            </div>
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="footer-title">Contact Info</h5>
              <ul className="footer-contact">
                <li><Phone size={16} /> +91 99108 06694</li>
                <li><Mail size={16} /> prem.kumar@elites.co.in</li>
                <li><MapPin size={16} /> Delhi NCR, India</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Elite Managed Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
