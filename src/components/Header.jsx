import React from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa'; // Icon for user avatar

const Header = ({ darkMode }) => (
  <header
    className={`d-flex justify-content-between align-items-center py-3 px-4 shadow-sm 
      ${darkMode ? 'bg-dark border-bottom border-secondary text-light' : 'bg-white border-bottom text-dark'}`}
    style={{
      background: darkMode
        ? 'linear-gradient(to right, #343a40, #495057)'
        : 'linear-gradient(to right, #ffffff, #f8f9fa)',
      zIndex: 1000,
    }}
  >
    {/* Hamburger (mobile only) */}
    <button
      className="btn d-md-none me-3"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#sidebarOffcanvas"
    >
      <FaBars size={20} />
    </button>

    <div>
        <h1 className="text-center mb-4">📊 Social Media Dashboard</h1>
    </div>

    <div className="d-flex align-items-center gap-2">
      <FaUserCircle size={30} />
      <span className="fw-semibold">Bonny</span>
    </div>
  </header>
);

export default Header;
