import React from "react";

function DataEngineering() {
  return (
    <div>
      <section className="hero-section" data-aos="fade-down">
        <div className="overlay"></div>
        <div className="container">
          <h1>Data Engineering</h1>
          <h2>
            Build <span className="gradient-text">Scalable Pipelines</span> and <span className="gradient-text">Data Platforms</span>
          </h2>
          <p>
            Future-proof your business with modern, cloud-native data engineering solutions.
          </p>
        </div>
      </section>
      <section className="services-section" data-aos="zoom-in">
        <div className="container">
          <h3>Our Expertise</h3>
          <div className="services-grid">
            <div className="service-card" data-aos="fade-up">
              <h4>Cloud Data Warehousing</h4>
              <p>Design and implementation on AWS, Azure, or GCP.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <h4>ETL/ELT & Orchestration</h4>
              <p>Automated, reliable workflows using Airflow, dbt, and more.</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <h4>Streaming & Real-Time</h4>
              <p>Kafka, Spark Streaming, and event-driven architectures.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DataEngineering;