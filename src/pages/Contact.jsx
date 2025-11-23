import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    // This would normally handle the form submission
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '+233241234567'
    const message = 'Hello! I would like to inquire about your transport services.'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Contact Akwantuo Express</h1>
            <p>Your journey matters to us. Get in touch for bookings, support, or any travel inquiries.</p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="quick-contact">
        <div className="container">
          <div className="quick-contact-grid">
            <div className="quick-contact-card phone-card">
              <div className="card-header">
                <h3>Call Us Now</h3>
                <p>Speak directly with our team</p>
              </div>
              <div className="contact-details">
                <a href="tel:+233241234567" className="contact-link primary">+233 24 123 4567</a>
                <a href="tel:+233209876543" className="contact-link">+233 20 987 6543</a>
                <span className="availability-badge">Available 24/7</span>
              </div>
            </div>

            <div className="quick-contact-card email-card">
              <div className="card-header">
                <h3>Email Support</h3>
                <p>Send us your inquiries</p>
              </div>
              <div className="contact-details">
                <a href="mailto:info@akwantuoexpress.com" className="contact-link primary">info@akwantuoexpress.com</a>
                <a href="mailto:support@akwantuoexpress.com" className="contact-link">support@akwantuoexpress.com</a>
                <span className="availability-badge">Response within 2 hours</span>
              </div>
            </div>

            <div className="quick-contact-card whatsapp-card" onClick={handleWhatsAppClick}>
              <div className="card-header">
                <h3>WhatsApp Chat</h3>
                <p>Instant messaging support</p>
              </div>
              <div className="contact-details">
                <span className="contact-link primary">+233 24 123 4567</span>
                <span className="availability-badge clickable">Click to start chat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-layout">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>Send us a Message</h2>
                <p>Fill out the form below and our team will get back to you promptly.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="complaint">Service Complaint</option>
                      <option value="suggestion">Suggestion</option>
                      <option value="lost-found">Lost & Found</option>
                      <option value="refund">Refund Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Office Information */}
            <div className="office-info-section">
              <div className="office-header">
                <h2>Our Terminals</h2>
                <p>Visit us at any of our convenient locations across Ghana.</p>
              </div>

              <div className="terminals-list">
                <div className="terminal-card">
                  <div className="terminal-header">
                    <h3>Accra Central Terminal</h3>
                    <span className="terminal-badge main">Main Terminal</span>
                  </div>
                  <div className="terminal-details">
                    <div className="detail-item">
                      <span className="detail-label">Address</span>
                      <span className="detail-value">123 Liberation Road, Accra Central</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Phone</span>
                      <a href="tel:+233241234567" className="detail-value link">+233 24 123 4567</a>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Hours</span>
                      <span className="detail-value">Daily: 5:00 AM - 11:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="terminal-card">
                  <div className="terminal-header">
                    <h3>Kumasi Terminal</h3>
                    <span className="terminal-badge">Regional Hub</span>
                  </div>
                  <div className="terminal-details">
                    <div className="detail-item">
                      <span className="detail-label">Address</span>
                      <span className="detail-value">456 Kejetia Market, Kumasi</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Phone</span>
                      <a href="tel:+233242345678" className="detail-value link">+233 24 234 5678</a>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Hours</span>
                      <span className="detail-value">Daily: 5:30 AM - 10:30 PM</span>
                    </div>
                  </div>
                </div>

                <div className="terminal-card">
                  <div className="terminal-header">
                    <h3>Tamale Terminal</h3>
                    <span className="terminal-badge">Northern Hub</span>
                  </div>
                  <div className="terminal-details">
                    <div className="detail-item">
                      <span className="detail-label">Address</span>
                      <span className="detail-value">789 Central Market, Tamale</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Phone</span>
                      <a href="tel:+233243456789" className="detail-value link">+233 24 345 6789</a>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Hours</span>
                      <span className="detail-value">Daily: 6:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="office-footer">
                <div className="emergency-contact">
                  <h4>Emergency Contact</h4>
                  <p>For urgent travel assistance outside business hours:</p>
                  <a href="tel:+233241234567" className="emergency-number">+233 24 123 4567</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How do I book a ticket?</h4>
              <p>You can book tickets online through our website, mobile app, or visit any of our terminals. Online booking is available 24/7.</p>
            </div>
            <div className="faq-item">
              <h4>What payment methods do you accept?</h4>
              <p>We accept Mobile Money (MTN, Vodafone, AirtelTigo), Visa/MasterCard, and cash payments at our terminals.</p>
            </div>
            <div className="faq-item">
              <h4>Can I cancel or reschedule my ticket?</h4>
              <p>Yes, you can cancel or reschedule your ticket up to 2 hours before departure. Cancellation fees may apply.</p>
            </div>
            <div className="faq-item">
              <h4>What is your luggage policy?</h4>
              <p>Each passenger is allowed one carry-on bag and one checked bag up to 20kg. Additional luggage incurs extra charges.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer student discounts?</h4>
              <p>Yes, we offer 20% discount for students with valid student ID cards on all routes.</p>
            </div>
            <div className="faq-item">
              <h4>How early should I arrive at the terminal?</h4>
              <p>We recommend arriving at least 30 minutes before your departure time for check-in and boarding.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
