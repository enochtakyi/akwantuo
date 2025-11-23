import { useState } from 'react'
import './Routes.css'

const Routes = () => {
  const [selectedRoute, setSelectedRoute] = useState('all')

  const routes = [
    {
      id: 1,
      from: 'Accra',
      to: 'Kumasi',
      distance: '250km',
      duration: '4 hours',
      price: 45,
      frequency: '6 daily trips',
      category: 'popular'
    },
    {
      id: 2,
      from: 'Accra',
      to: 'Tamale',
      distance: '600km',
      duration: '8 hours',
      price: 80,
      frequency: '3 daily trips',
      category: 'popular'
    },
    {
      id: 3,
      from: 'Accra',
      to: 'Cape Coast',
      distance: '165km',
      duration: '2.5 hours',
      price: 30,
      frequency: '8 daily trips',
      category: 'coastal'
    },
    {
      id: 4,
      from: 'Accra',
      to: 'Takoradi',
      distance: '240km',
      duration: '3.5 hours',
      price: 40,
      frequency: '5 daily trips',
      category: 'coastal'
    },
    {
      id: 5,
      from: 'Kumasi',
      to: 'Tamale',
      distance: '350km',
      duration: '5 hours',
      price: 55,
      frequency: '4 daily trips',
      category: 'northern'
    },
    {
      id: 6,
      from: 'Kumasi',
      to: 'Sunyani',
      distance: '120km',
      duration: '2 hours',
      price: 25,
      frequency: '6 daily trips',
      category: 'regional'
    },
    {
      id: 7,
      from: 'Tamale',
      to: 'Bolgatanga',
      distance: '160km',
      duration: '2.5 hours',
      price: 35,
      frequency: '4 daily trips',
      category: 'northern'
    },
    {
      id: 8,
      from: 'Cape Coast',
      to: 'Elmina',
      distance: '12km',
      duration: '20 minutes',
      price: 8,
      frequency: '15 daily trips',
      category: 'coastal'
    }
  ]

  const filteredRoutes = selectedRoute === 'all' 
    ? routes 
    : routes.filter(route => route.category === selectedRoute)

  return (
    <div className="routes">
      {/* Hero Section */}
      <section className="routes-hero">
        <div className="container">
          <div className="routes-hero-content">
            <h1>Routes & Fares</h1>
            <p>Explore our comprehensive network of routes connecting major cities across Ghana</p>
          </div>
        </div>
      </section>

      {/* Route Filter */}
      <section className="route-filter">
        <div className="container">
          <div className="filter-tabs">
            <button 
              className={`filter-tab ${selectedRoute === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedRoute('all')}
            >
              All Routes
            </button>
            <button 
              className={`filter-tab ${selectedRoute === 'popular' ? 'active' : ''}`}
              onClick={() => setSelectedRoute('popular')}
            >
              Popular Routes
            </button>
            <button 
              className={`filter-tab ${selectedRoute === 'coastal' ? 'active' : ''}`}
              onClick={() => setSelectedRoute('coastal')}
            >
              Coastal Routes
            </button>
            <button 
              className={`filter-tab ${selectedRoute === 'northern' ? 'active' : ''}`}
              onClick={() => setSelectedRoute('northern')}
            >
              Northern Routes
            </button>
            <button 
              className={`filter-tab ${selectedRoute === 'regional' ? 'active' : ''}`}
              onClick={() => setSelectedRoute('regional')}
            >
              Regional Routes
            </button>
          </div>
        </div>
      </section>

      {/* Routes Grid */}
      <section className="routes-grid-section">
        <div className="container">
          <div className="routes-grid">
            {filteredRoutes.map(route => (
              <div key={route.id} className="route-card">
                <div className="route-header">
                  <h3>{route.from} ↔ {route.to}</h3>
                  <span className="route-price">GH₵ {route.price}</span>
                </div>
                <div className="route-details">
                  <div className="route-info">
                    <span className="info-label">Distance:</span>
                    <span className="info-value">{route.distance}</span>
                  </div>
                  <div className="route-info">
                    <span className="info-label">Duration:</span>
                    <span className="info-value">{route.duration}</span>
                  </div>
                </div>
                <div className="route-actions">
                  <button className="btn btn-outline">View Schedule</button>
                  <button className="btn btn-primary">Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fare Information */}
      <section className="fare-info">
        <div className="container">
          <h2 className="section-title">Fare Information</h2>
          <div className="fare-grid">
            <div className="fare-card">
              <div className="fare-icon"></div>
              <h4>Standard Fare</h4>
              <p>Regular pricing for all routes with comfortable seating and air conditioning.</p>
            </div>
            <div className="fare-card">
              <div className="fare-icon"></div>
              <h4>Student Discount</h4>
              <p>20% discount for students with valid student ID. Available on all routes.</p>
            </div>
            <div className="fare-card">
              <div className="fare-icon"></div>
              <h4>Group Booking</h4>
              <p>Special rates for groups of 10 or more passengers. Contact us for quotes.</p>
            </div>
            <div className="fare-card">
              <div className="fare-icon"></div>
              <h4>Return Tickets</h4>
              <p>Save 10% when you book return tickets for the same route within 30 days.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tips */}
      <section className="booking-tips">
        <div className="container">
          <h2 className="section-title">Booking Tips</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>Book in Advance</h4>
              <p>Book your tickets at least 24 hours in advance to guarantee your seat, especially during peak seasons.</p>
            </div>
            <div className="tip-card">
              <h4>Arrive Early</h4>
              <p>Arrive at the terminal at least 30 minutes before departure time for check-in and boarding.</p>
            </div>
            <div className="tip-card">
              <h4>Mobile Tickets</h4>
              <p>Use our mobile app for easy booking and digital tickets. No need to print physical tickets.</p>
            </div>
            <div className="tip-card">
              <h4>Luggage Policy</h4>
              <p>Each passenger is allowed one carry-on bag and one checked bag up to 20kg free of charge.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Routes
