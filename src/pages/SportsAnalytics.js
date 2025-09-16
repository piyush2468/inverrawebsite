import React from "react";

function SportsAnalytics() {
  return (
    <div>
      <section className="hero-section" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container">
          <h1>Sports Analytics</h1>
          <h2>
            <span className="gradient-text">Data-Driven</span> Performance and <span className="gradient-text">Strategy</span>
          </h2>
          <p>
            Empowering teams, coaches, and athletes with advanced sports analytics and custom insights.
          </p>
        </div>
      </section>
      <section className="services-section" data-aos="zoom-in">
        <div className="container">
          <h3>Solutions</h3>
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up">
              <h4>Player Performance</h4>
              <p>In-depth analysis of player stats and health metrics.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Game Strategy</h4>
              <p>Predictive models to optimize tactics and outcomes.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Fan Engagement</h4>
              <p>Interactive analytics for broadcasters and fans.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SportsAnalytics;