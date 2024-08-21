import React from 'react'
import Jobs from './(job)/Components/Jobs'
import './Job.css'; // Import your CSS file

//TODO: Design this page and have it be landing page of the app
const page = () => {
  return (
      <div className="job-container">
        <header className="header">
          <nav className="navbar">
            <div className="logo">
              <h1>Faa'r</h1>
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
            </ul>
          </nav>
          <div className="hero">
            <video autoPlay muted loop className="hero-video">
              <source src="lab.mp4" type="video/mp4" />
            </video>
          </div>
        </header>
  
        <section className="statistics">
          <h2>Our Statistics</h2>
          <div className="stats-grid">
            <div className="stat">
              <h3>13</h3>
              <p>Job Offers</p>
            </div>
            <div className="stat">
              <h3>7</h3>
              <p>Registered Company</p>
            </div>
            <div className="stat">
              <h3>2</h3>
              <p>CV'S/Resume</p>
            </div>
            <div className="stat">
              <h3>2</h3>
              <p>Daily Users</p>
            </div>
          </div>
        </section>
  
        <section className="actions">
          <div className="action-item">
            <h3>Companies</h3>
            <p>Hiring? Register your company for free, browse our talented pool, post and track job applications</p>
          </div>
          <div className="action-item">
            <h3>Browse Jobs</h3>
            <p>Find your dream job with our extensive database of open positions.</p>
          </div>
          <div className="action-item">
            <h3>Post A Job</h3>
            <p>Reach a global audience of talented individuals looking for new opportunities.</p>
          </div>
          <div className="action-item">
            <h3>Apply & Get Interviewed</h3>
            <p>Create a compelling profile, apply for jobs, and get matched with potential employers.</p>
          </div>
          <div className="action-item">
            <h3>Manage & Track</h3>
            <p>Keep track of your applications, manage your profile, and stay organized.</p>
          </div>
          <div className="action-item">
            <h3>Start A Career</h3>
            <p>Find your next career move and connect with top companies.</p>
          </div>
          <div className="action-item">
            <h3>Hire</h3>
            <p>Find the perfect candidate for your open positions and build a strong team.</p>
          </div>
        </section>
      </div>
    );
}

export default page

