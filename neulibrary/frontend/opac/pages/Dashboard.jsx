import React from 'react';

function Dashboard() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-primary">Student Dashboard</h2>
      <div className="row">
        {/* Statistics Cards */}
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-success shadow">
            <div className="card-body">
              <h5>Books Borrowed</h5>
              <h2 className="fw-bold">12</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-danger shadow">
            <div className="card-body">
              <h5>Overdue</h5>
              <h2 className="fw-bold">1</h2>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-info shadow">
            <div className="card-body">
              <h5>System Status</h5>
              <small>Pi Connected</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
