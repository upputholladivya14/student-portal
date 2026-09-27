import { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {

    if (activeTab === "overview") {
      return (
        <div className="dashboard-content">

          <h2>Dashboard Overview</h2>

          <div className="dashboard-cards">

            <div className="dashboard-card">

              <h3>4</h3>

              <p>Enrolled Courses</p>

            </div>

            <div className="dashboard-card">

              <h3>82%</h3>

              <p>Average Progress</p>

            </div>

            <div className="dashboard-card">

              <h3>12</h3>

              <p>Assignments</p>

            </div>

          </div>

          <p className="welcome-message">
            Welcome back! Continue your learning journey.
          </p>

        </div>
      );
    }

    if (activeTab === "profile") {
      return (
        <div className="dashboard-content">

          <h2>My Profile</h2>

          <div className="profile-box">

            <p>
              <strong>Name:</strong>{" "}
              Divya
            </p>

            <p>
              <strong>Email:</strong>{" "}
              divya987@gmail.com
            </p>

            <p>
              <strong>Course:</strong>{" "}
              Computer Science Engineering
            </p>

            <p>
              <strong>Year:</strong>{" "}
              4th year
            </p>

          </div>

        </div>
      );
    }

    if (activeTab === "settings") {
      return (
        <div className="dashboard-content">

          <h2>Settings</h2>

          <div className="settings-box">

            <label className="setting-option">

              <input
                type="checkbox"
                defaultChecked
              />

              <span>
                Enable Email Notifications
              </span>

            </label>

            <label className="setting-option">

              <input
                type="checkbox"
              />

              <span>
                Enable Course Reminders
              </span>

            </label>

          </div>

        </div>
      );
    }

    return null;
  };

  return (
    <main className="dashboard-page">

      <div className="dashboard-container">

        <h1>Student Dashboard</h1>

        <p className="dashboard-subtitle">
          Manage your student account.
        </p>

        <div className="dashboard-tabs">

          <button
            className={
              activeTab === "overview"
                ? "dashboard-tab active-tab"
                : "dashboard-tab"
            }
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>

          <button
            className={
              activeTab === "profile"
                ? "dashboard-tab active-tab"
                : "dashboard-tab"
            }
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>

          <button
            className={
              activeTab === "settings"
                ? "dashboard-tab active-tab"
                : "dashboard-tab"
            }
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>

        </div>

        {renderContent()}

      </div>

    </main>
  );
}

export default Dashboard;