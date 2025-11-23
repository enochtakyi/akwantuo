import { useState } from 'react'
import './Home.css'

const Home = () => {
  const [bookingForm, setBookingForm] = useState({
    from: '',
    to: '',
    date: '',
    passengers: 1
  })

  const handleInputChange = (e) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    })
  }

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    console.log('Booking form submitted:', bookingForm)
    // This would normally handle the booking logic
  }

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  Travel Comfortably Across <span className="highlight">Ghana</span>
                </h1>
                <p className="hero-subtitle">
                  Book your bus tickets online with ease. Safe, reliable, and affordable transportation 
                  to all major cities and towns across the country.
                </p>
                <div className="hero-stats">
                  <div className="stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Routes</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">30+</span>
                    <span className="stat-label">Daily Trips</span>
                  </div>
                  <div className="stat">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support</span>
                  </div>
                </div>
              </div>

              {/* Quick Booking Form */}
              <div className="booking-card">
                <h2 className="booking-title">Book Your Trip</h2>
                <form onSubmit={handleBookingSubmit} className="booking-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="from">From</label>
                      <select
                        id="from"
                        name="from"
                        value={bookingForm.from}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select departure city</option>
                        <option value="accra">Accra</option>
                        <option value="kumasi">Kumasi</option>
                        <option value="tamale">Tamale</option>
                        <option value="cape-coast">Cape Coast</option>
                        <option value="takoradi">Takoradi</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="to">To</label>
                      <select
                        id="to"
                        name="to"
                        value={bookingForm.to}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select destination</option>
                        <option value="accra">Accra</option>
                        <option value="kumasi">Kumasi</option>
                        <option value="tamale">Tamale</option>
                        <option value="cape-coast">Cape Coast</option>
                        <option value="takoradi">Takoradi</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Travel Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={bookingForm.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="passengers">Passengers</label>
                      <select
                        id="passengers"
                        name="passengers"
                        value={bookingForm.passengers}
                        onChange={handleInputChange}
                      >
                        {[1,2,3,4,5,6].map(num => (
                          <option key={num} value={num}>{num} Passenger{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-secondary booking-btn">
                    Search Trips
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose AkwantuoExpress?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Safe & Secure</h3>
              <p>All our vehicles are regularly maintained and our drivers are professionally trained for your safety.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Easy Payment</h3>
              <p>Pay with Mobile Money, Visa, MasterCard, or cash. Multiple payment options for your convenience.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>Mobile Booking</h3>
              <p>Book your tickets anytime, anywhere. Get instant confirmation and e-tickets on your phone.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"></div>
              <h3>24/7 Support</h3>
              <p>Our customer support team is available round the clock to assist you with any queries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      <section className="popular-routes">
        <div className="container">
          <h2 className="section-title">Popular Routes</h2>
          <div className="routes-grid">
            <div className="route-card">
              <div className="route-header">
                <h3>Accra ↔ Kumasi</h3>
                <span className="route-price">GH₵ 45</span>
              </div>
              <div className="route-details">
                <div className="route-info">
                  <span className="info-label">Distance:</span>
                  <span className="info-value">250km</span>
                </div>
                <div className="route-info">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">4 hours</span>
                </div>
              </div>
              <div className="route-actions">
                <button className="btn btn-outline">View Schedule</button>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
            <div className="route-card">
              <div className="route-header">
                <h3>Accra ↔ Tamale</h3>
                <span className="route-price">GH₵ 80</span>
              </div>
              <div className="route-details">
                <div className="route-info">
                  <span className="info-label">Distance:</span>
                  <span className="info-value">600km</span>
                </div>
                <div className="route-info">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">8 hours</span>
                </div>
              </div>
              <div className="route-actions">
                <button className="btn btn-outline">View Schedule</button>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
            <div className="route-card">
              <div className="route-header">
                <h3>Kumasi ↔ Tamale</h3>
                <span className="route-price">GH₵ 55</span>
              </div>
              <div className="route-details">
                <div className="route-info">
                  <span className="info-label">Distance:</span>
                  <span className="info-value">350km</span>
                </div>
                <div className="route-info">
                  <span className="info-label">Duration:</span>
                  <span className="info-value">5 hours</span>
                </div>
              </div>
              <div className="route-actions">
                <button className="btn btn-outline">View Schedule</button>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
