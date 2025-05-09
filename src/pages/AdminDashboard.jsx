import React from 'react';
import Header from '../components/admin/AdminHeader';
import StatBox from '../components/admin/StatBox';
import UserRow from '../components/admin/UserRow';
import ActivityRow from '../components/admin/ActivityRow';
import '../styles/stylesheet.css';

export default function AdminDashboard() {
  const stats = [
    { icon: "/images/user_plus.png", label: "Registered Today", id: "userPlus", count: 0, alt: "User plus" },
    { icon: "/images/user_clock.png", label: "Online Users", id: "userClock", count: 1, alt: "User clock" },
    { icon: "/images/user_slash.png", label: "Unconfirmed Users", id: "userLine", count: 0, alt: "User slash" },
    { icon: "/images/user_total.png", label: "Total Users", id: "userTotal", count: 3, alt: "User total" }
  ];

  const latestUsers = [
    { firstName: "Samantha", lastName: "Schiefen", createdAt: "1 month ago" },
    { firstName: "Allison", lastName: "Kroger", createdAt: "1 month ago" },
    { firstName: "Colby", lastName: "Swan", createdAt: "1 month ago" }
  ];

  const latestActivities = [
    { name: "Samantha Schiefen", action: "logged into the system", timeAgo: "1 second ago" },
    { name: "Allison Kroger", action: "logged into the system", timeAgo: "2 days ago" }
  ];

  return (
    <>
      <Header />
      <section id="adminDashboard" className="page">
        <div id="userStats">
          {stats.map((stat, index) => (
            <StatBox key={index} {...stat} />
          ))}
        </div>
        <div id="latestStats">
          <div id="latestUsers" className="latest">
            <h6>Latest Users</h6>
            <table className="latestTable">
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Created At</th>
                </tr>
              </thead>
              <tbody>
                {latestUsers.map((user, index) => (
                  <UserRow key={index} {...user} />
                ))}
              </tbody>
            </table>
          </div>
          <div id="latestActivities" className="latest">
            <h6>Latest Activities</h6>
            <table className="latestTable">
              <thead>
                <tr>
                  <th>Activity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {latestActivities.map((activity, index) => (
                  <ActivityRow key={index} {...activity} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}