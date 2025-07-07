import React from 'react';
import { overviewData } from '../data/dummyData';

const iconMap = {
  Followers: '👥',
  Posts: '📝',
  Likes: '👍',
  Comments: '💬',
  Shares: '🔄',
  Views: '👁️',
  Reach: '📡',
  Impressions: '📈',
};

const OverviewCards = ({ darkMode, setDarkMode }) => {
  return (
    <div className="row g-4 mb-4">
      {overviewData.map((item, i) => (
        <div className="col-6 col-md-4 col-lg-2" key={i}>
          <div className="glass-card h-100 text-center">
            <div className="card-body d-flex flex-column justify-content-center align-items-center py-4">
              <div className="fs-3 mb-2">{iconMap[item.label] || '📊'}</div>
              <h6 className="text-uppercase fw-bold text-warning small mb-1">
                {item.label}
              </h6>
              <h4 className="fw-bold text-light">{item.value.toLocaleString()}</h4>
              {item.delta !== undefined && (
                <p className={`small mt-1 fw-medium ${item.delta >= 0 ? 'text-success' : 'text-danger'}`}>
                  {item.delta >= 0 ? '▲' : '▼'} {Math.abs(item.delta)}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCards;
