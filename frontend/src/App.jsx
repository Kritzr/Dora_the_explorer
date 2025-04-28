import React, { useState, useEffect } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login'; 
import { Search, Calendar, MapPin, DollarSign, Moon, Sun } from 'lucide-react';

const AppContent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('');
  const [location, setLocation] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const openHelpPage = () => {
    window.open('/index.html', '_blank');

  };

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Navigation Bar */}
      <nav className="nav-container">
        <div className="logo">
          <h1>Dora_The_Explorer</h1>
          <span className="subtitle">Let's explore the world!</span>
        </div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#tour">Tour</a>
        </div>
        <div className="auth-buttons">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <button className="register-btn">Register</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="explore-now">EXPLORE NOW</h2>
          <h1 className="main-title">Find Your Dream Destination</h1>
          <p className="subtitle">Fill in the fields below to find the best spot for your next tour.</p>

          {/* Search Form */}
          <div className="search-form">
                      <div className="input-group">
                        <MapPin size={18} />
                        <input
                          type="text"
                          placeholder="Where do you want to go?"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                      </div>
                      <div className="input-group">
                        <DollarSign size={18} />
                        <input
                          type="text"
                          placeholder="What's your budget?"
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                        />
                      </div>
                      <div className="input-group">
                        <Calendar size={18} />
                        <input
                          type="text"
                          placeholder="When are you traveling?"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                      <button className="search-btn">
                        <Search size={18} />
                        Search
                      </button>
                    </div>

                    {/* Category Filters */}
                    <div className="category-filters">
                      <button className="filter-btn active">All</button>
                      <button className="filter-btn">Recommended</button>
                      <button className="filter-btn">Beach</button>
                      <button className="filter-btn">Park</button>
                      <button className="filter-btn">Nature</button>
                      <button className="filter-btn">Mountain</button>
                    </div>
                  </div>
                </section>

                {/* Destination Cards */}
                <section className="destinations-section">
                  <div className="destinations-grid">
                    <div className="destination-card">
                    <img 
  src="https://images.pexels.com/photos/7787591/pexels-photo-7787591.jpeg" 
  alt="Person Wearing a Bamboo Straw Hat" 
  className="card-image" 
/>

                      <div className="card-label">
                        <h3>Jungle Adventure</h3>
                        <p>Rain Forest</p>
                        <div className="location">
                          <MapPin size={16} />
                          <span>South America</span>
                        </div>
                        <div className="rating">4.8</div>
                      </div>
                    </div>

                    <div className="destination-card">
                    <img 
  src="https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg" 
  alt="Seashore During Daytime" 
  className="card-image" 
/>

                      <div className="card-label">
                        <h3>Tropical Beach</h3>
                        <p>Island Paradise</p>
                        <div className="location">
                          <MapPin size={16} />
                          <span>Caribbean</span>
                        </div>
                        <div className="rating">4.5</div>
                      </div>
                    </div>

                    <div className="destination-card">
                    <img 
  src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg" 
  alt="Red Leaf Trees" 
  className="card-image" 
/>
                      <div className="card-label">
                        <h3>Autumn Escape</h3>
                        <p>Fall Foliage</p>
                        <div className="location">
                          <MapPin size={16} />
                          <span>Northern Forest</span>
                        </div>
                        <div className="rating">4.7</div>
                      </div>
                    </div>

                    <div className="destination-card">
                      <img src="https://images.pexels.com/photos/4973655/pexels-photo-4973655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400
" alt="Temple Tour" className="card-image" />
                      <div className="card-label">
                        <h3>Temple Tour</h3>
                        <p>Cultural Adventure</p>
                        <div className="location">
                          <MapPin size={16} />
                          <span>Asia</span>
                        </div>
                        <div className="rating">4.9</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Services Section */}
                <section className="services-section">
                  <div className="services-header">
                    <h3>What we serve</h3>
                    <h2>We offer our best services</h2>
                  </div>

                  <div className="services-grid">
                    <div className="service-card">
                      <div className="icon">🌤️</div>
                      <h3>Weather Forecast</h3>
                      <p>Get accurate weather information for all your adventure destinations.</p>
                    </div>

                    <div className="service-card">
                      <div className="icon">🧭</div>
                      <h3>Explorer's Guide</h3>
                      <p>Professional guides to help you explore the most exciting places.</p>
                    </div>

                    <div className="service-card">
                      <div className="icon">🗺️</div>
                      <h3>Custom Adventures</h3>
                      <p>Plan your own unique adventure with our customization tools.</p>
                    </div>
                  </div>
                </section>

                {/* About Us Section */}
                <section id="about" className="about-section">
                  <div 
                    style={{
                      backgroundColor: darkMode ? '#1a1a1a' : '#f9f9f9',
                      color: darkMode ? '#f1f1f1' : '#333',
                      padding: '60px 20px',
                      textAlign: 'center',
                      borderRadius: '12px',
                      margin: '40px auto',
                      maxWidth: '900px',
                      boxShadow: darkMode 
                        ? '0 4px 20px rgba(255, 255, 255, 0.1)' 
                        : '0 4px 20px rgba(0, 0, 0, 0.1)'
                    }}
                  >
                    <h2 style={{ fontSize: '2.8rem', marginBottom: '20px', fontWeight: '700' }}>
                      About Us
                    </h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '20px', padding: '0 20px' }}>
                      <strong>Dora_The_Explorer</strong> is specially curated for <strong>solo travelers</strong> who crave adventure, freedom, and unforgettable journeys. 
                      Our mission is to empower individuals to explore the world boldly and safely, discovering new places and themselves along the way.
                    </p>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', padding: '0 20px' }}>
                      From stunning beaches to breathtaking mountains, we bring you handpicked destinations tailored for your solo expeditions. 
                      Let's explore the world, one solo trip at a time!
                    </p>
                  </div>
                </section>



                {/* Featured Tours Section */}
                <section className="featured-section">
                  <div className="featured-header">
                    <span className="explore-tag">Explore</span>
                    <h2>Our Featured Tours</h2>
                  </div>

                  <div className="featured-grid">
                    <div className="featured-card">
                    <img 
  src="https://images.pexels.com/photos/30763843/pexels-photo-30763843.jpeg" 
  alt="Iconic Big Ben and Westminster Palace in London" 
  className="card-image" 
/>

                      <span className="featured-tag">Featured</span>
                    </div>

                    <div className="featured-card">
                    <img 
  src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg" 
  alt="Red Leaf Trees" 
  className="card-image" 
/>
                      <span className="featured-tag">Featured</span>
                    </div>

                    <div className="featured-card">
                    <img 
  src="https://images.pexels.com/photos/31805881/pexels-photo-31805881.jpeg" 
  alt="Mountain trail runner in scenic landscape" 
  className="card-image" 
/>

                      <span className="featured-tag">Featured</span>
                    </div>

                    <div className="featured-card">
                    <img 
  src="https://images.pexels.com/photos/31779699/pexels-photo-31779699.jpeg" 
  alt="Serene sunset over calm ocean waters" 
  className="card-image" 
/>

                      <span className="featured-tag">Featured</span>
                    </div>
                  </div>
                </section>

                {/* Newsletter Section */}
                <section className="newsletter-section">
                  <div className="newsletter-content">
                    <h2>Subscribe now to get useful traveling information.</h2>
                    <div className="subscribe-form">
                      <input type="email" placeholder="Enter your email" />
                      <button className="subscribe-btn">Subscribe</button>
                    </div>
                    <p>Join our community of explorers to receive the latest adventure tips and special offers.</p>
                  </div>
                  <div className="newsletter-image">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.897153484396!2d144.9537363155887!3d-37.81627927975184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5b1daaa951%3A0x5045675218ce6e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1681271821037!5m2!1sen!2sau" 
    width="600" 
    height="550" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
</div>

                </section>

                {/* Footer */}
                <footer className="footer">
                  <div className="footer-content">
                    <div className="footer-logo">
                      <h2>Dora_The_Explorer</h2>
                      <p>Let's explore the world together!</p>
                    </div>
                    <div className="footer-links">
                      <div className="footer-column">
                        <h3>Company</h3>
                        <a href="#about">About Us</a>
                        <a onClick={openHelpPage} style={{ cursor: 'pointer' }}>
        Help?
      </a>
                        <a href="#contact">Contact</a>
                      </div>
                      <div className="footer-column">
                        <h3>Support</h3>
                        <a href="#faq">FAQ</a>
                        <a href="#help">Help Center</a>
                        <a href="#safety">Safety Tips</a>
                      </div>
                      <div className="footer-column">
                        <h3>Legal</h3>
                        <a href="#terms">Terms</a>
                        <a href="#privacy">Privacy</a>
                        <a href="#cookies">Cookies</a>
                      </div>
                    </div>
                  </div>
                  <div className="copyright">
                    <p>© 2025 Dora_The_Explorer. All rights reserved.</p>
                  </div>
                </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

// CSS styles for the app
const styles = `
/* Reset and base styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

:root {
  --primary-color: #5e17eb;
  --primary-light: #8649f1;
  --accent-color: #ff6b6b;
  --text-color: #333;
  --text-light: #666;
  --bg-color: #fff;
  --bg-light: #f9f9f9;
  --bg-dark: #f2f2f2;
  --card-bg: #fff;
  --nav-bg: #fff;
  --border-color: #e1e1e1;
  --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

.dark-mode {
  --primary-color: #8649f1;
  --primary-light: #a276f5;
  --accent-color: #ff8787;
  --text-color: #e1e1e1;
  --text-light: #b3b3b3;
  --bg-color: #121212;
  --bg-light: #1e1e1e;
  --bg-dark: #2d2d2d;
  --card-bg: #2d2d2d;
  --nav-bg: #1a1a1a;
  --border-color: #444;
  --shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-x: hidden;
}

/* Navigation Styles */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: var(--nav-bg);
  box-shadow: var(--shadow);
  transition: var(--transition);
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo h1 {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.5rem;
}

.logo .subtitle {
  font-size: 0.8rem;
  color: var(--text-light);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: var(--transition);
}

.nav-links a:hover {
  color: var(--primary-color);
}

.auth-buttons {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.login-btn, .register-btn, .theme-toggle {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
}

.theme-toggle {
  background-color: transparent;
  color: var(--text-color);
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-btn {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.register-btn {
  background-color: var(--primary-color);
  color: white;
}

.login-btn:hover, .register-btn:hover {
  transform: translateY(-2px);
}

/* Hero Section Styles */
.hero-section {
  padding: 4rem 5%;
  background-color: var(--bg-light);
  text-align: center;
  transition: var(--transition);
  width: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.explore-now {
  color: var(--accent-color);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.main-title {
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.subtitle {
  color: var(--text-light);
  margin-bottom: 2rem;
  font-size: 1.2rem;
}

/* Search Form Styles */
.search-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.input-group {
  display: flex;
  align-items: center;
  background-color: var(--bg-light);
  padding: 0.75rem 1rem;
  border-radius: 4px;
  flex: 1;
  min-width: 200px;
  color: var(--text-color);
  border: 1px solid var(--border-color);
}

.input-group svg {
  margin-right: 0.5rem;
  color: var(--primary-color);
}

.input-group input {
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  color: var(--text-color);
  font-size: 1rem;
}

.input-group input::placeholder {
  color: var(--text-light);
}

.search-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
  font-size: 1rem;
}

.search-btn:hover {
  background-color: var(--primary-light);
  transform: translateY(-2px);
}

/* Category Filters Styles */
.category-filters {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  background-color: var(--bg-color);
  color: var(--text-color);
  cursor: pointer;
  transition: var(--transition);
  font-size: 0.9rem;
}

.filter-btn:hover, .filter-btn.active {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

/* Destinations Section Styles */
.destinations-section {
  padding: 6rem 5%;
  background-color: var(--bg-color);
  transition: var(--transition);
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.destination-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  height: 100%;
}

.destination-card:hover {
  transform: translateY(-10px);
}

.card-image {
  height: 250px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
  background-size: cover;
  background-position: center;
  color: white;
}

.card-image::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
}

.card-image.forest {
  background-image: url('/api/placeholder/400/250');
}

.card-image.beach {
  background-image: url('/api/placeholder/400/250');
}

.card-image.autumn {
  background-image: url('/api/placeholder/400/250');
}

.card-image.temple {
  background-image: url('/api/placeholder/400/250');
}

.card-label {
  position: relative;
  z-index: 1;
}

.card-label h3 {
  margin: 0;
  font-size: 1.25rem;
}

.card-label p {
  margin: 0.25rem 0 0.5rem;
  opacity: 0.8;
}

.location {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
}

.rating {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(0,0,0,0.6);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-weight: bold;
  z-index: 1;
}

/* Services Section Styles */
.services-section {
  padding: 6rem 5%;
  background-color: var(--bg-light);
  text-align: center;
  transition: var(--transition);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.services-header {
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.services-header h3 {
  color: var(--accent-color);
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
}

.services-header h2 {
  font-size: 2.5rem;
  margin-top: 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.service-card {
  background-color: var(--card-bg);
  padding: 3rem 2rem;
  border-radius: 8px;
  box-shadow: var(--shadow);
  transition: var(--transition);
  height: 100%;
}

.service-card:hover {
  transform: translateY(-5px);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.service-card h3 {
  margin-top: 0;
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.service-card p {
  color: var(--text-light);
  line-height: 1.6;
}

/* Featured Tours Section */
.featured-section {
  padding: 6rem 5%;
  background-color: var(--bg-color);
  transition: var(--transition);
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.explore-tag {
  background-color: var(--primary-light);
  color: white;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.featured-header h2 {
  font-size: 2.5rem;
  margin: 0;
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.featured-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  height: 100%;
}

.featured-card:hover {
  transform: scale(1.03);
}

.featured-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  display: block;
}

.featured-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: var(--accent-color);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
}

/* Newsletter Section */
.newsletter-section {
  padding: 6rem 5%;
  background-color: var(--bg-light);
  display: flex;
  align-items: center;
  gap: 3rem;
  transition: var(--transition);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 60vh;
}

.newsletter-content {
  flex: 1;
}

.newsletter-content h2 {
  font-size: 2rem;
  margin-top: 0;
  line-height: 1.3;
}

.subscribe-form {
  display: flex;
  margin: 2rem 0;
  width: 100%;
}

.subscribe-form input {
  flex: 1;
  padding: 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px 0 0 4px;
  outline: none;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: 1rem;
}

.subscribe-btn {
  padding: 1rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
  font-size: 1rem;
}

.subscribe-btn:hover {
  background-color: var(--primary-light);
}

.newsletter-content p {
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.6;
}

.newsletter-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.newsletter-image img {
  max-width: 100%;
  border-radius: 8px;
  height: auto;
  object-fit: cover;
}

/* Footer Styles */
.footer {
  background-color: var(--bg-dark);
  padding: 5rem 5% 2rem;
  margin-top: auto;
  transition: var(--transition);
  width: 100%;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin-bottom: 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.footer-logo {
  flex: 2;
  min-width: 200px;
}

.footer-logo h2 {
  color: var(--primary-color);
  margin-top: 0;
  font-size: 1.8rem;
}

.footer-logo p {
  color: var(--text-light);
  margin-top: 0.5rem;
  font-size: 1rem;
}

.footer-links {
  flex: 3;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
}

.footer-column {
  min-width: 150px;
}

.footer-column h3 {
  margin-top: 0;
  color: var(--text-color);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.footer-column a {
  display: block;
  color: var(--text-light);
  text-decoration: none;
  margin-bottom: 1rem;
  transition: var(--transition);
}

.footer-column a:hover {
  color: var(--primary-color);
}

.copyright {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-light);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .nav-container {
    padding: 1rem 3%;
  }
  
  .nav-links {
    display: none;
  }
  
  .search-form {
    flex-direction: column;
    padding: 1.5rem;
  }
  
  .main-title {
    font-size: 2rem;
  }
  
  .newsletter-section {
    flex-direction: column;
    padding: 4rem 5%;
  }
  
  .newsletter-image {
    order: -1;
  }
  
  .hero-section,
  .destinations-section,
  .services-section,
  .featured-section {
    padding: 3rem 5%;
    min-height: auto;
  }
  
  .services-header h2,
  .featured-header h2 {
    font-size: 1.8rem;
  }
  
  .footer {
    padding: 3rem 5% 2rem;
  }
  
  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .auth-buttons {
    gap: 0.5rem;
  }
  
  .login-btn, .register-btn {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
  
  .card-image {
    height: 200px;
  }
  
  .service-card {
    padding: 2rem 1.5rem;
  }
  
  .icon {
    font-size: 2.5rem;
  }
}

/* Full screen adjustments */
#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
}

section {
  width: 100vw;
  max-width: 100%;
}
`;

// Add the styles to the component
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerHTML = styles;
document.head.appendChild(styleSheet);

export default App;