import React from "react";

function DataScience() {
  return (
    <div>
      <section className="hero-section" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container">
          <h1>Data Science</h1>
          <h2>
            Unlock <span className="gradient-text">AI</span> and <span className="gradient-text">Predictive Insights</span>
          </h2>
          <p>
            Transform your data into actionable intelligence with advanced analytics and ML.
          </p>
        </div>
      </section>
      <section className="services-section" data-aos="zoom-in">
        <div className="container">
          <h3>What We Do</h3>
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up">
              <h4>Machine Learning</h4>
              <p>Supervised, unsupervised, and deep learning model development.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <h4>Natural Language Processing</h4>
              <p>Text analytics, sentiment analysis, and chatbot solutions.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Analytics Consulting</h4>
              <p>Data-driven strategy for business transformation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataScience;