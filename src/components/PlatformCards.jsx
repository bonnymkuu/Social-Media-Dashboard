import React from 'react';
import { platformStats } from '../data/dummyData';

const PlatformCards = ({ darkMode, setDarkMode }) => {
  return (
    <div className="row g-4 mb-4">
      {platformStats.map((item, index) => (
        <div className="col-12 col-md-6 col-lg-4" key={index}>
          <div
            className="platform-card glass-card p-4 text-black h-100"
            style={{ borderLeft: `6px solid ${item.color}` }}
          >
            <div className="d-flex align-items-center mb-3">
              <div className="fs-2 me-3">{item.icon}</div>
              <div>
                <h5 className="mb-0 fw-bold" style={{ color: item.color }}>
                  {item.platform}
                </h5>
                <small className="text-black-50">Social Performance</small>
              </div>
            </div>
            <div className="row text-center">
              <div className="col">
                <p className="mb-1 small text-warning">Followers</p>
                <h5 className="fw-bold">{item.followers.toLocaleString()}</h5>
              </div>
              <div className="col">
                <p className="mb-1 small text-warning">Likes</p>
                <h5 className="fw-bold">{item.likes.toLocaleString()}</h5>
              </div>
              <div className="col">
                <p className="mb-1 small text-warning">Comments</p>
                <h5 className="fw-bold">{item.comments.toLocaleString()}</h5>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlatformCards;
