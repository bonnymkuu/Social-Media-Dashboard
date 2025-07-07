import React from 'react';
import { Line, Bar, Doughnut, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { activityData } from '../data/dummyData';

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const getChartOptions = (darkMode) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: darkMode ? '#f8f9fa' : '#212529',
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: darkMode ? '#dee2e6' : '#495057',
      },
      grid: {
        color: darkMode ? 'rgba(255,255,255,0.1)' : '#dee2e6',
      },
    },
    y: {
      ticks: {
        color: darkMode ? '#dee2e6' : '#495057',
      },
      grid: {
        color: darkMode ? 'rgba(255,255,255,0.1)' : '#dee2e6',
      },
    },
  },
});

const cardClass = (darkMode) =>
  `card shadow-sm h-100 ${darkMode ? 'bg-dark text-light' : ''}`;

const ActivityChart = ({ darkMode }) => {
  return (
    <div className="row">
      {/* Line Chart */}
      <div className="col-lg-6 mb-4">
        <div className={cardClass(darkMode)}>
          <div className="card-body" style={{ height: "300px", position: "relative" }}>
            <h5 className="card-title mb-3">Likes vs Comments</h5>
            <Line
              data={{
                labels: activityData.labels,
                datasets: [
                  {
                    label: 'Likes',
                    data: activityData.likes,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    tension: 0.4,
                    fill: true,
                  },
                  {
                    label: 'Comments',
                    data: activityData.comments,
                    borderColor: 'rgba(255, 206, 86, 1)',
                    backgroundColor: 'rgba(255, 206, 86, 0.2)',
                    tension: 0.4,
                    fill: true,
                  },
                ],
              }}
              options={getChartOptions(darkMode)}
            />
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="col-lg-6 mb-4">
        <div className={cardClass(darkMode)}>
          <div className="card-body" style={{ height: "300px", position: "relative" }}>
            <h5 className="card-title mb-3">Monthly Comments</h5>
            <Bar
              data={{
                labels: [
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                ],
                datasets: [
                  {
                    label: "Comments",
                    data: [900, 880, 940, 1020, 1100, 980, 1050, 1200, 1150, 1230, 1300, 1400],
                    backgroundColor: "#1cc88a",
                  },
                ],
              }}
              options={getChartOptions(darkMode)}
            />
          </div>
        </div>
      </div>

      {/* Smaller Charts in 3-Column Row */}
      <div className="col-lg-4 mb-4">
        <div className={cardClass(darkMode)}>
          <div className="card-body" style={{ height: "250px", position: "relative" }}>
            <h6 className="card-title">Device Usage</h6>
            <Doughnut
              data={{
                labels: ["Mobile", "Desktop", "Tablet"],
                datasets: [
                  {
                    data: [70, 22, 8],
                    backgroundColor: ["#36b9cc", "#4e73df", "#f6c23e"],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    labels: {
                      color: darkMode ? '#f8f9fa' : '#212529',
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className={cardClass(darkMode)}>
          <div className="card-body" style={{ height: "250px", position: "relative" }}>
            <h6 className="card-title">Platform Share</h6>
            <Pie
              data={{
                labels: ["Instagram", "Facebook", "LinkedIn", "TikTok"],
                datasets: [
                  {
                    data: [45, 25, 15, 15],
                    backgroundColor: ["#e83e8c", "#3b5998", "#0077b5", "#69c9d0"],
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    labels: {
                      color: darkMode ? '#f8f9fa' : '#212529',
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className="col-lg-4 mb-4">
        <div className={cardClass(darkMode)}>
          <div className="card-body" style={{ height: "250px", position: "relative" }}>
            <h6 className="card-title">Daily Reach</h6>
            <Line
              data={{
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                  {
                    label: "Reach",
                    data: [1200, 1400, 1500, 1300, 1600, 1100, 900],
                    borderColor: "#f6c23e",
                    backgroundColor: "rgba(246,194,62,0.35)",
                    fill: true,
                    tension: 0.4,
                  },
                ],
              }}
              options={getChartOptions(darkMode)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
