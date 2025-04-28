import { useState } from 'react';
import './Auth.css';

function Auth() {
  // State to toggle between login and signup forms
  const [isLogin, setIsLogin] = useState(true);
  
  // Form data for signup
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    age: '',
    gender: '',
    dob: '',
    paymentMode: ''
  });
  
  // Form data for login
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  // Error states
  const [signupErrors, setSignupErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});
  
  // Success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handle input changes for signup form
  const handleSignupChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setSignupData({
      ...signupData,
      [name]: newValue
    });
    
    // Clear error when typing
    if (signupErrors[name]) {
      setSignupErrors({
        ...signupErrors,
        [name]: ''
      });
    }
  };
  
  // Handle input changes for login form
  const handleLoginChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    
    setLoginData({
      ...loginData,
      [name]: newValue
    });
    
    // Clear error when typing
    if (loginErrors[name]) {
      setLoginErrors({
        ...loginErrors,
        [name]: ''
      });
    }
  };
  
  // Validate signup form
  const validateSignupForm = () => {
    let tempErrors = {};
    let isValid = true;

    // First Name validation
    if (!signupData.firstName.trim()) {
      tempErrors.firstName = "First name is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(signupData.firstName)) {
      tempErrors.firstName = "First name should contain only letters";
      isValid = false;
    }

    // Last Name validation
    if (!signupData.lastName.trim()) {
      tempErrors.lastName = "Last name is required";
      isValid = false;
    } else if (!/^[A-Za-z]+$/.test(signupData.lastName)) {
      tempErrors.lastName = "Last name should contain only letters";
      isValid = false;
    }

    // Email validation
    if (!signupData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(signupData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Indian Phone number validation (10 digits starting with 6, 7, 8, or 9)
    if (!signupData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[6-9]\d{9}$/.test(signupData.phone)) {
      tempErrors.phone = "Please enter a valid Indian phone number (10 digits)";
      isValid = false;
    }

    // Password validation
    if (!signupData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (signupData.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
      isValid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])/.test(signupData.password)) {
      tempErrors.password = "Password must include uppercase, lowercase, number and special character";
      isValid = false;
    }

    // Confirm Password validation
    if (!signupData.confirmPassword) {
      tempErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (signupData.confirmPassword !== signupData.password) {
      tempErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    // Age validation
    if (!signupData.age) {
      tempErrors.age = "Age is required";
      isValid = false;
    } else if (isNaN(signupData.age) || signupData.age < 1 || signupData.age > 120) {
      tempErrors.age = "Please enter a valid age (1-120)";
      isValid = false;
    }

    // Gender validation
    if (!signupData.gender) {
      tempErrors.gender = "Please select a gender";
      isValid = false;
    }

    // Date of Birth validation
    if (!signupData.dob) {
      tempErrors.dob = "Date of birth is required";
      isValid = false;
    } else {
      const today = new Date();
      const birthDate = new Date(signupData.dob);
      if (birthDate > today) {
        tempErrors.dob = "Date of birth cannot be in the future";
        isValid = false;
      }
    }

    // Payment mode validation
    if (!signupData.paymentMode) {
      tempErrors.paymentMode = "Please select a payment mode";
      isValid = false;
    }

    setSignupErrors(tempErrors);
    return isValid;
  };
  
  // Validate login form
  const validateLoginForm = () => {
    let tempErrors = {};
    let isValid = true;
    
    // Email validation
    if (!loginData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(loginData.email)) {
      tempErrors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    // Password validation
    if (!loginData.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    }
    
    setLoginErrors(tempErrors);
    return isValid;
  };
  
  // Handle signup form submission
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignupForm()) {
      console.log("Signup data submitted:", signupData);
      setIsSubmitted(true);
    } else {
      console.log("Signup form has errors");
    }
  };
  
  // Handle login form submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      console.log("Login data submitted:", loginData);
      setIsSubmitted(true);
    } else {
      console.log("Login form has errors");
    }
  };
  
  // Reset forms
  const handleReset = () => {
    if (isLogin) {
      setLoginData({
        email: '',
        password: '',
        rememberMe: false
      });
      setLoginErrors({});
    } else {
      setSignupData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        age: '',
        gender: '',
        dob: '',
        paymentMode: ''
      });
      setSignupErrors({});
    }
    setIsSubmitted(false);
  };
  
  // Toggle between login and signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setIsSubmitted(false);
    setLoginErrors({});
    setSignupErrors({});
  };

  return (
    <div className="auth-container">
      {isSubmitted ? (
        <div className="success-message">
  {isLogin ? (
    <>
    
      
  <div className="Auth-container">
    {isSubmitted ? (
      <div className="success-message">
        {isLogin ? (
          <>
            <h2>Login Successful!</h2>
            <p>Welcome back!</p>

            <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "25px", flex: "1 1 100%" }}>
              <h2 style={{ marginTop: "0", color: "rgb(123, 87, 254)" }}>Welcome back, Explorer!</h2>
              <p>Your next adventure awaits. You have <strong>2 upcoming trips</strong> planned.</p>
              <button style={{ backgroundColor: "rgb(123, 87, 254)", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
                Plan New Trip
              </button>
            </div>

            <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "25px", flex: "1 1 45%", minWidth: "300px" }}>
              <h3 style={{ marginTop: "0", color: "rgb(123, 87, 254)" }}>Upcoming Trips</h3>
              <div style={{ borderLeft: "4px solidrgb(114, 67, 255)", paddingLeft: "15px", marginBottom: "20px" }}>
                <h4 style={{ margin: "0", fontSize: "18px" }}>Rainforest Adventure</h4>
                <p style={{ margin: "5px 0", color: "#666" }}><i className="fas fa-calendar" style={{ marginRight: "8px" }}></i>May 15 - May 22, 2025</p>
                <p style={{ margin: "5px 0", color: "#666" }}><i className="fas fa-map-marker-alt" style={{ marginRight: "8px" }}></i>Amazon, Brazil</p>
              </div>
              <div style={{ borderLeft: "4px solidrgb(112, 86, 231)", paddingLeft: "15px" }}>
                <h4 style={{ margin: "0", fontSize: "18px" }}>Mountain Exploration</h4>
                <p style={{ margin: "5px 0", color: "#666" }}><i className="fas fa-calendar" style={{ marginRight: "8px" }}></i>June 10 - June 17, 2025</p>
                <p style={{ margin: "5px 0", color: "#666" }}><i className="fas fa-map-marker-alt" style={{ marginRight: "8px" }}></i>Andes, Peru</p>
              </div>
            </div>

            <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "25px", flex: "1 1 45%", minWidth: "300px" }}>
              <h3 style={{ marginTop: "0", color: "rgb(123, 87, 254)" }}>Weather Forecast</h3>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "48px", marginBottom: "10px" }}><i className="fas fa-sun" style={{ color: "rgb(123, 87, 254)" }}></i></div>
                <h4 style={{ margin: "0" }}>Amazon, Brazil</h4>
                <p style={{ fontSize: "36px", fontWeight: "bold", margin: "10px 0" }}>82°F</p>
                <p>Sunny with a chance of rain in the afternoon</p>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                  <div style={{ textAlign: "center" }}>
                    <p style={{ margin: "0", fontWeight: "bold" }}>MON</p>
                    <i className="fas fa-cloud-sun" style={{ fontSize: "24px", margin: "10px 0", color: "#b2bec3" }}></i>
                    <p style={{ margin: "0" }}>79°F</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <p style={{ margin: "0", fontWeight: "bold" }}>TUE</p>
                    <i className="fas fa-cloud-rain" style={{ fontSize: "24px", margin: "10px 0", color: "#74b9ff" }}></i>
                    <p style={{ margin: "0" }}>77°F</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <p style={{ margin: "0", fontWeight: "bold" }}>WED</p>
                    <i className="fas fa-sun" style={{ fontSize: "24px", margin: "10px 0", color: "#feca57" }}></i>
                    <p style={{ margin: "0" }}>84°F</p>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <p style={{ margin: "0", fontWeight: "bold" }}>THU</p>
                    <i className="fas fa-sun" style={{ fontSize: "24px", margin: "10px 0", color: "#feca57" }}></i>
                    <p style={{ margin: "0" }}>86°F</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "25px", flex: "1 1 45%", minWidth: "300px" }}>
              <h3 style={{ marginTop: "0", color: "rgb(161, 67, 255)" }}>Packing List</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" id="item1" style={{ marginRight: "10px", width: "18px", height: "18px" }} />
                  <label htmlFor="item1" style={{ fontSize: "16px" }}>Hiking Boots</label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" id="item2" style={{ marginRight: "10px", width: "18px", height: "18px" }} />
                  <label htmlFor="item2" style={{ fontSize: "16px" }}>Rain Jacket</label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" id="item3" style={{ marginRight: "10px", width: "18px", height: "18px" }} />
                  <label htmlFor="item3" style={{ fontSize: "16px" }}>Insect Repellent</label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" id="item4" style={{ marginRight: "10px", width: "18px", height: "18px" }} />
                  <label htmlFor="item4" style={{ fontSize: "16px" }}>First Aid Kit</label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" id="item5" style={{ marginRight: "10px", width: "18px", height: "18px" }} />
                  <label htmlFor="item5" style={{ fontSize: "16px" }}>Water Bottle</label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input type="checkbox" id="item6" style={{ marginRight: "10px", width: "18px", height: "18px" }} />
                  <label htmlFor="item6" style={{ fontSize: "16px" }}>Camera</label>
                </div>
              </div>
              <button style={{ backgroundColor: "rgb(105, 22, 213)", color: "white", border: "none", padding: "8px 16px", borderRadius: "5px", cursor: "pointer", marginTop: "15px", fontSize: "14px" }}>
                Add Item
              </button>
            </div>

            <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", padding: "25px", flex: "1 1 45%", minWidth: "300px" }}>
              <h3 style={{ marginTop: "0", color: "rgb(105, 22, 213)" }}>My Travel Map</h3>
              
              <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.897153484396!2d144.9537363155887!3d-37.81627927975184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5b1daaa951%3A0x5045675218ce6e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1681271821037!5m2!1sen!2sau" 
    width="300" 
    height="250" 
    style={{ border: 0 }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
              
              <div style={{ marginTop: "15px" }}>
                <p style={{ margin: "5px 0" }}><strong>Countries visited:</strong> 12</p>
                <p style={{ margin: "5px 0" }}><strong>Cities explored:</strong> 47</p>
                <p style={{ margin: "5px 0" }}><strong>Next destination:</strong> Amazon Rainforest</p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    ) : null}
  </div>



      {/* Logout Button */}
      <button className="reset-btn" onClick={handleReset}>
        Logout
      </button>
    </>
  ) : (
    <>
      <h2>Registration Successful!</h2>
      <p>Thank you for registering, {signupData.firstName}!</p>
      <button className="reset-btn" onClick={handleReset}>
        Register Another
      </button>
    </>
  )}
</div>

      ) : (
        <div className="form-wrapper">
          <div className="form-tabs">
            <button 
              className={`form-tab ${isLogin ? 'active' : ''}`} 
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button 
              className={`form-tab ${!isLogin ? 'active' : ''}`} 
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
          
          {isLogin ? (
            // Login Form
            <form onSubmit={handleLoginSubmit} className="auth-form login-form">
              <h2>Welcome Back</h2>
              
              <div className="form-field">
                <label htmlFor="login-email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="login-email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                  className={loginErrors.email ? "error-input" : ""}
                  placeholder="Enter your email"
                />
                {loginErrors.email && <span className="error">{loginErrors.email}</span>}
              </div>
              
              <div className="form-field">
                <label htmlFor="login-password">Password <span className="required">*</span></label>
                <input
                  type="password"
                  id="login-password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className={loginErrors.password ? "error-input" : ""}
                  placeholder="Enter your password"
                />
                {loginErrors.password && <span className="error">{loginErrors.password}</span>}
              </div>
              
              <div className="form-field checkbox-field">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={loginData.rememberMe}
                  onChange={handleLoginChange}
                />
                <label htmlFor="rememberMe">Remember me</label>
              </div>
              
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              
              <div className="form-actions">
                <button type="submit" className="submit-btn">Login</button>
              </div>
              
              <div className="form-footer">
                <p>Don't have an account? <span className="link" onClick={toggleForm}>Sign up</span></p>
              </div>
            </form>
          ) : (
            // Signup Form
            <form onSubmit={handleSignupSubmit} className="auth-form signup-form">
              <h2>Create Account</h2>
              
              <div className="form-group">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">First Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={signupData.firstName}
                      onChange={handleSignupChange}
                      className={signupErrors.firstName ? "error-input" : ""}
                      placeholder="First name"
                    />
                    {signupErrors.firstName && <span className="error">{signupErrors.firstName}</span>}
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="lastName">Last Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={signupData.lastName}
                      onChange={handleSignupChange}
                      className={signupErrors.lastName ? "error-input" : ""}
                      placeholder="Last name"
                    />
                    {signupErrors.lastName && <span className="error">{signupErrors.lastName}</span>}
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                  className={signupErrors.email ? "error-input" : ""}
                  placeholder="Email address"
                />
                {signupErrors.email && <span className="error">{signupErrors.email}</span>}
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={signupData.phone}
                  onChange={handleSignupChange}
                  placeholder="10-digit Indian mobile number"
                  className={signupErrors.phone ? "error-input" : ""}
                />
                {signupErrors.phone && <span className="error">{signupErrors.phone}</span>}
              </div>

              <div className="form-group">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={signupData.password}
                      onChange={handleSignupChange}
                      className={signupErrors.password ? "error-input" : ""}
                      placeholder="Create password"
                    />
                    {signupErrors.password && <span className="error">{signupErrors.password}</span>}
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="confirmPassword">Confirm Password <span className="required">*</span></label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={signupData.confirmPassword}
                      onChange={handleSignupChange}
                      className={signupErrors.confirmPassword ? "error-input" : ""}
                      placeholder="Confirm password"
                    />
                    {signupErrors.confirmPassword && <span className="error">{signupErrors.confirmPassword}</span>}
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="age">Age <span className="required">*</span></label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={signupData.age}
                      onChange={handleSignupChange}
                      min="1"
                      max="120"
                      className={signupErrors.age ? "error-input" : ""}
                      placeholder="Your age"
                    />
                    {signupErrors.age && <span className="error">{signupErrors.age}</span>}
                  </div>
                  
                  <div className="form-field">
                    <label htmlFor="gender">Gender <span className="required">*</span></label>
                    <select
                      id="gender"
                      name="gender"
                      value={signupData.gender}
                      onChange={handleSignupChange}
                      className={signupErrors.gender ? "error-input" : ""}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                    {signupErrors.gender && <span className="error">{signupErrors.gender}</span>}
                  </div>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="dob">Date of Birth <span className="required">*</span></label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={signupData.dob}
                  onChange={handleSignupChange}
                  className={signupErrors.dob ? "error-input" : ""}
                />
                {signupErrors.dob && <span className="error">{signupErrors.dob}</span>}
              </div>

              <div className="form-field">
                <label>Mode of Payment <span className="required">*</span></label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="credit"
                      name="paymentMode"
                      value="credit"
                      checked={signupData.paymentMode === "credit"}
                      onChange={handleSignupChange}
                    />
                    <label htmlFor="credit">Credit Card</label>
                  </div>
                  
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="debit"
                      name="paymentMode"
                      value="debit"
                      checked={signupData.paymentMode === "debit"}
                      onChange={handleSignupChange}
                    />
                    <label htmlFor="debit">Debit Card</label>
                  </div>
                  
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="upi"
                      name="paymentMode"
                      value="upi"
                      checked={signupData.paymentMode === "upi"}
                      onChange={handleSignupChange}
                    />
                    <label htmlFor="upi">UPI</label>
                  </div>
                  
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="netbanking"
                      name="paymentMode"
                      value="netbanking"
                      checked={signupData.paymentMode === "netbanking"}
                      onChange={handleSignupChange}
                    />
                    <label htmlFor="netbanking">Net Banking</label>
                  </div>
                </div>
                {signupErrors.paymentMode && <span className="error">{signupErrors.paymentMode}</span>}
              </div>

              <div className="form-actions">
                <button type="submit" className="submit-btn">Sign Up</button>
                <button type="button" className="reset-btn" onClick={handleReset}>Reset</button>
              </div>
              
              <div className="form-footer">
                <p>Already have an account? <span className="link" onClick={toggleForm}>Login</span></p>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

export default Auth;