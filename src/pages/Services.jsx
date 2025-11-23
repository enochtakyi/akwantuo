import './Services.css'

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <h1>Our Services</h1>
            <p>Comprehensive transportation solutions tailored to meet all your travel needs</p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="main-services">
        <div className="container">
          <div className="services-grid">
            <div className="service-card featured">
              <div className="service-icon"></div>
              <h3>Regular Bus Service</h3>
              <p>Daily scheduled trips to all major cities and towns across Ghana with comfortable seating and air conditioning.</p>
              <ul className="service-features">
                <li>Air-conditioned buses</li>
                <li>Comfortable reclining seats</li>
                <li>Free WiFi on select routes</li>
                <li>Onboard entertainment</li>
                <li>Professional drivers</li>
              </ul>
              <button className="btn btn-primary">Book Now</button>
            </div>

            <div className="service-card">
              <div className="service-icon"></div>
              <h3>Charter Services</h3>
              <p>Private bus rentals for groups, events, tours, and special occasions.</p>
              <ul className="service-features">
                <li>Various bus sizes</li>
                <li>Custom itineraries</li>
                <li>Professional chauffeurs</li>
                <li>Event coordination</li>
              </ul>
              <button className="btn btn-outline">Get Quote</button>
            </div>

            <div className="service-card">
              <div className="service-icon"></div>
              <h3>Parcel Delivery</h3>
              <p>Fast and secure parcel delivery service across our extensive route network.</p>
              <ul className="service-features">
                <li>Same-day delivery</li>
                <li>Package tracking</li>
                <li>Insurance coverage</li>
                <li>Door-to-door service</li>
              </ul>
              <button className="btn btn-outline">Send Package</button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="service-features-section">
        <div className="container">
          <h2 className="section-title">What Makes Us Different</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon"></div>
              <h4>Safety Certified</h4>
              <p>All our vehicles undergo regular safety inspections and maintenance</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"></div>
              <h4>Experienced Drivers</h4>
              <p>Professional and licensed drivers with years of experience ensuring safe journeys</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"></div>
              <h4>Multiple Payment Options</h4>
              <p>Pay with cash, mobile money, or credit/debit cards</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon"></div>
              <h4>24/7 Customer Support</h4>
              <p>Round-the-clock assistance for all your travel needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="booking-process">
        <div className="container">
          <h2 className="section-title">How to Book</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Select Route</h4>
              <p>Choose your departure and destination cities</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Pick Date & Time</h4>
              <p>Select your preferred travel date and departure time</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Choose Seats</h4>
              <p>Select your preferred seats from available options</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Make Payment</h4>
              <p>Complete your booking with secure online payment</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h4>Get E-Ticket</h4>
              <p>Receive your electronic ticket via SMS and email</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
