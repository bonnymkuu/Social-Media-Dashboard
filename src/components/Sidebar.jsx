import React from 'react';

const Sidebar = ({ darkMode, setDarkMode }) => {
  const bgClass = darkMode ? 'bg-dark text-light' : 'bg-white text-dark';

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={`d-none d-md-flex flex-column p-3 shadow ${bgClass}`}
        style={{ width: '250px', minHeight: '100vh' }}
      >
        <h4 className="mb-4">📱 Dashboard</h4>

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active">Overview</a>
          </li>
          <li><a href="#" className="nav-link">Activity</a></li>
          <li><a href="#" className="nav-link">Top Posts</a></li>
        </ul>

        <hr />

        <div className="form-check form-switch mt-auto">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
          </label>
        </div>
      </div>

      {/* Mobile Offcanvas Sidebar */}
      <div className="d-md-none">
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="sidebarOffcanvas"
          aria-labelledby="sidebarOffcanvasLabel"
        >
          <div className={`offcanvas-header ${bgClass}`}>
            <h5 className="offcanvas-title" id="sidebarOffcanvasLabel">📱 Dashboard</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className={`offcanvas-body d-flex flex-column ${bgClass}`}>
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active">Overview</a>
              </li>
              <li><a href="#" className="nav-link">Activity</a></li>
              <li><a href="#" className="nav-link">Top Posts</a></li>
            </ul>

            <hr />

            <div className="form-check form-switch mt-auto">
              <input
                className="form-check-input"
                type="checkbox"
                id="mobileDarkModeSwitch"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label className="form-check-label" htmlFor="mobileDarkModeSwitch">
                {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
