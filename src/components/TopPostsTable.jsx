import React from 'react';
import { topPosts, newFollowers } from '../data/dummyData';

const TopPostsTable = ({ darkMode }) => {
  const tableClass = `table table-striped rounded ${
    darkMode ? 'table-dark text-light' : 'table-light text-dark'
  } glass-table`;

  const cardClass = `card shadow-sm h-100 ${darkMode ? 'bg-dark text-light' : ''}`;

  return (
    <div className="row">
      {/* Top Posts Table */}
      <div className="col-lg-6 mb-4">
        <div className={cardClass}>
          <div className="card-body">
            <h5 className="card-title mb-3">Top Posts</h5>
            <div className="table-responsive">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Likes</th>
                    <th>Comments</th>
                  </tr>
                </thead>
                <tbody>
                  {topPosts.map((post) => (
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.likes}</td>
                      <td>{post.comments}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* New Followers Table */}
      <div className="col-lg-6 mb-4">
        <div className={cardClass}>
          <div className="card-body">
            <h5 className="card-title mb-3">New Followers</h5>
            <div className="table-responsive">
              <table className={tableClass}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Joined</th>
                    <th>Platform</th>
                  </tr>
                </thead>
                <tbody>
                  {newFollowers.map((follower, idx) => (
                    <tr key={idx}>
                      <td>{idx + 1}</td>
                      <td>{follower.user}</td>
                      <td>{follower.joined}</td>
                      <td>{follower.platform}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPostsTable;
