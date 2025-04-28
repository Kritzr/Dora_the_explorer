import { useState, useEffect } from 'react';
import './dashboard.css';

function Dashboard({ user, onLogout }) {
  // If no user is passed, we'll use this default data
  const userData = user || {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '9876543210',
    joinDate: '2023-01-15',
    lastLogin: '2025-04-28T09:30:00',
    paymentMode: 'credit'
  };

  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Format time for display
  const formatTime = (dateString) => {
    const options = { hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  // Sample statistics data
  const stats = [
    { title: 'Total Orders', value: 24, icon: '📦', change: '+12%' },
    { title: 'Pending', value: 3, icon: '⏳', change: '-5%' },
    { title: 'Completed', value: 21, icon: '✅', change: '+18%' },
    { title: 'Total Spent', value: '₹14,500', icon: '💰', change: '+8%' }
  ];

  // Sample recent activity data
  const recentActivity = [
    { id: 1, type: 'purchase', description: 'Purchased Premium Subscription', date: '2025-04-27T14:30:00', amount: '₹2,999' },
    { id: 2, type: 'refund', description: 'Refund Processed - Order #45632', date: '2025-04-25T10:15:00', amount: '₹1,200' },
    { id: 3, type: 'support', description: 'Support Ticket #8754 Resolved', date: '2025-04-23T16:45:00', amount: null },
    { id: 4, type: 'purchase', description: 'Purchased Monthly Plan', date: '2025-04-20T09:20:00', amount: '₹499' }
  ];

  // Sample notification data
  const notifications = [
    { id: 1, message: 'Your order #67890 has been shipped', time: '2 hours ago', isRead: false },
    { id: 2, message: 'Password changed successfully', time: '1 day ago', isRead: true },
    { id: 3, message: 'New feature added: Dark Mode', time: '3 days ago', isRead: false },
    { id: 4, message: 'May discount available: Use code MAY2025', time: '1 week ago', isRead: true }
  ];

  // Function to toggle sidebar menu on mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h2>MyApp</h2>
          <button className="close-menu-btn" onClick={toggleMenu}>×</button>
        </div>
        <div className="sidebar-user">
          <div className="user-avatar">
            {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
          </div>
          <div className="user-info">
            <h3>{userData.firstName} {userData.lastName}</h3>
            <p>{userData.email}</p>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li className={activeTab === 'overview' ? 'active' : ''}>
              <button onClick={() => setActiveTab('overview')}>
                <span className="nav-icon">📊</span>
                Overview
              </button>
            </li>
            <li className={activeTab === 'profile' ? 'active' : ''}>
              <button onClick={() => setActiveTab('profile')}>
                <span className="nav-icon">👤</span>
                Profile
              </button>
            </li>
            <li className={activeTab === 'orders' ? 'active' : ''}>
              <button onClick={() => setActiveTab('orders')}>
                <span className="nav-icon">📦</span>
                Orders
              </button>
            </li>
            <li className={activeTab === 'settings' ? 'active' : ''}>
              <button onClick={() => setActiveTab('settings')}>
                <span className="nav-icon">⚙️</span>
                Settings
              </button>
            </li>
          </ul>
        </nav>
        <div className="sidebar-footer">
          <button className="logout-btn" onClick={onLogout}>
            <span className="nav-icon">🚪</span>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top header with mobile menu button */}
        <header className="dashboard-header">
          <button className="menu-toggle" onClick={toggleMenu}>
            ☰
          </button>
          <div className="header-welcome">
            <h1>{getGreeting()}, {userData.firstName}!</h1>
            <p>{currentTime.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="header-actions">
            <button className="notification-btn">
              🔔
              <span className="notification-badge">
                {notifications.filter(n => !n.isRead).length}
              </span>
            </button>
          </div>
        </header>

        {/* Dashboard content based on active tab */}
        <div className="dashboard-content">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <section className="stats-section">
                <h2>Your Statistics</h2>
                <div className="stats-grid">
                  {stats.map((stat, index) => (
                    <div className="stat-card" key={index}>
                      <div className="stat-icon">{stat.icon}</div>
                      <div className="stat-details">
                        <h3>{stat.title}</h3>
                        <p className="stat-value">{stat.value}</p>
                        <p className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                          {stat.change} from last month
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="activity-section">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                  {recentActivity.map(activity => (
                    <div className={`activity-item activity-${activity.type}`} key={activity.id}>
                      <div className="activity-icon">
                        {activity.type === 'purchase' ? '🛒' : 
                         activity.type === 'refund' ? '💸' : '🎫'}
                      </div>
                      <div className="activity-details">
                        <h4>{activity.description}</h4>
                        <p>{formatDate(activity.date)} at {formatTime(activity.date)}</p>
                      </div>
                      {activity.amount && (
                        <div className="activity-amount">
                          {activity.amount}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="tab-content">
              <section className="profile-section">
                <h2>Your Profile</h2>
                <div className="profile-card">
                  <div className="profile-header">
                    <div className="profile-avatar">
                      {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
                    </div>
                    <div className="profile-title">
                      <h3>{userData.firstName} {userData.lastName}</h3>
                      <p>Member since {userData.joinDate ? formatDate(userData.joinDate) : 'N/A'}</p>
                    </div>
                    <button className="edit-profile-btn">Edit Profile</button>
                  </div>
                  
                  <div className="profile-details">
                    <div className="profile-detail-item">
                      <h4>Email Address</h4>
                      <p>{userData.email}</p>
                    </div>
                    <div className="profile-detail-item">
                      <h4>Phone Number</h4>
                      <p>{userData.phone}</p>
                    </div>
                    <div className="profile-detail-item">
                      <h4>Default Payment Method</h4>
                      <p>{userData.paymentMode === 'credit' ? 'Credit Card' : 
                         userData.paymentMode === 'debit' ? 'Debit Card' : 
                         userData.paymentMode === 'upi' ? 'UPI' : 'Net Banking'}</p>
                    </div>
                    <div className="profile-detail-item">
                      <h4>Last Login</h4>
                      <p>{userData.lastLogin ? `${formatDate(userData.lastLogin)} at ${formatTime(userData.lastLogin)}` : 'N/A'}</p>
                    </div>
                  </div>
                </div>
              </section>
              
              <section className="account-section">
                <h2>Account Settings</h2>
                <div className="account-options">
                  <div className="account-option-card">
                    <h4>Password & Security</h4>
                    <p>Update your password and security settings</p>
                    <button>Manage</button>
                  </div>
                  <div className="account-option-card">
                    <h4>Communication Preferences</h4>
                    <p>Manage your email notifications and alerts</p>
                    <button>Manage</button>
                  </div>
                  <div className="account-option-card">
                    <h4>Payment Methods</h4>
                    <p>Add or update your payment information</p>
                    <button>Manage</button>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="tab-content">
              <section className="orders-section">
                <h2>Your Orders</h2>
                <div className="orders-filter">
                  <select defaultValue="all">
                    <option value="all">All Orders</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                  <input type="text" placeholder="Search orders..." />
                </div>
                <div className="orders-table">
                  <table>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#78945</td>
                        <td>Apr 26, 2025</td>
                        <td><span className="status pending">Pending</span></td>
                        <td>₹1,299</td>
                        <td><button className="view-btn">View</button></td>
                      </tr>
                      <tr>
                        <td>#78940</td>
                        <td>Apr 23, 2025</td>
                        <td><span className="status completed">Delivered</span></td>
                        <td>₹2,599</td>
                        <td><button className="view-btn">View</button></td>
                      </tr>
                      <tr>
                        <td>#78932</td>
                        <td>Apr 18, 2025</td>
                        <td><span className="status completed">Delivered</span></td>
                        <td>₹799</td>
                        <td><button className="view-btn">View</button></td>
                      </tr>
                      <tr>
                        <td>#78925</td>
                        <td>Apr 15, 2025</td>
                        <td><span className="status cancelled">Cancelled</span></td>
                        <td>₹3,499</td>
                        <td><button className="view-btn">View</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="orders-pagination">
                  <button disabled>Previous</button>
                  <span className="page-info">Page 1 of 3</span>
                  <button>Next</button>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="tab-content">
              <section className="settings-section">
                <h2>Account Settings</h2>
                
                <div className="settings-card">
                  <h3>Display Settings</h3>
                  <div className="settings-option">
                    <div>
                      <h4>Dark Mode</h4>
                      <p>Enable dark mode for better visibility in low light</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="settings-option">
                    <div>
                      <h4>Compact View</h4>
                      <p>Display more content with less spacing</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                
                <div className="settings-card">
                  <h3>Notification Settings</h3>
                  <div className="settings-option">
                    <div>
                      <h4>Email Notifications</h4>
                      <p>Receive order updates and promotions via email</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="settings-option">
                    <div>
                      <h4>SMS Notifications</h4>
                      <p>Receive order updates via SMS</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="settings-option">
                    <div>
                      <h4>Marketing Communications</h4>
                      <p>Receive promotions and special offers</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                
                <div className="settings-card">
                  <h3>Privacy Settings</h3>
                  <div className="settings-option">
                    <div>
                      <h4>Data Sharing</h4>
                      <p>Allow us to share your data with trusted partners</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                  <div className="settings-option">
                    <div>
                      <h4>Activity Tracking</h4>
                      <p>Allow us to track your activity for a better experience</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                
                <div className="settings-button-group">
                  <button className="save-settings-btn">Save Changes</button>
                  <button className="reset-settings-btn">Reset to Default</button>
                </div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Dashboard;