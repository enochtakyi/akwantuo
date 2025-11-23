import './About.css'

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Akwantuo Express</h1>
            <p>Your trusted partner for safe, comfortable, and reliable transportation across Ghana</p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, AkwantuoExpress has been at the forefront of revolutionizing public transportation 
                in Ghana. What started as a small fleet of 5 buses has grown into one of the country's most 
                trusted transport companies, serving thousands of passengers daily.
              </p>
              <p>
                Our commitment to safety, comfort, and reliability has made us the preferred choice for both 
                business and leisure travelers. We believe that quality transportation should be accessible 
                to everyone, which is why we maintain competitive pricing without compromising on service quality.
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <h3>10,000+</h3>
                <p>Happy Passengers</p>
              </div>
              <div className="stat-card">
                <h3>20+</h3>
                <p>Fleet Size</p>
              </div>
              <div className="stat-card">
                <h3>10+</h3>
                <p>Major Routes</p>
              </div>
              <div className="stat-card">
                <h3>99.5%</h3>
                <p>On-Time Performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon"></div>
              <h3>Our Mission</h3>
              <p>
                To provide safe, reliable, and comfortable transportation services that connect 
                communities across Ghana while maintaining the highest standards of customer service 
                and operational excellence.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-icon"></div>
              <h3>Our Vision</h3>
              <p>
                To be Ghana's leading transport company, recognized for innovation, sustainability, 
                and exceptional customer experience, while contributing to the economic development 
                of our communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"></div>
              <h4>Safety First</h4>
              <p>The safety of our passengers is our top priority in everything we do.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"></div>
              <h4>Excellence</h4>
              <p>We strive for excellence in service delivery and continuous improvement.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"></div>
              <h4>Integrity</h4>
              <p>We conduct our business with honesty, transparency, and ethical practices.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"></div>
              <h4>Sustainability</h4>
              <p>We are committed to environmentally responsible transportation solutions.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"></div>
              <h4>Customer Focus</h4>
              <p>Our customers are at the heart of everything we do and every decision we make.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"></div>
              <h4>Innovation</h4>
              <p>We embrace technology and innovation to enhance our services and operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo"></div>
              <h4>Kwame Asante</h4>
              <p className="team-role">Chief Executive Officer</p>
              <p className="team-bio">15+ years experience in transportation and logistics management.</p>
            </div>
            <div className="team-card">
              <div className="team-photo"></div>
              <h4>Akosua Mensah</h4>
              <p className="team-role">Chief Operations Officer</p>
              <p className="team-bio">Expert in fleet management and operational excellence.</p>
            </div>
            <div className="team-card">
              <div className="team-photo"></div>
              <h4>Kofi Osei</h4>
              <p className="team-role">Head of Safety & Compliance</p>
              <p className="team-bio">Ensuring the highest safety standards across all operations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
