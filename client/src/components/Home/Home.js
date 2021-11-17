import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <div className="site-wrapper">
      <div>
        <Helmet>
          <title>EduMe | Home 🏡 </title>
        </Helmet>
      </div>
      <div className="container">
        <div className="top-side d-flex flex-column justify-content-center">
          <h1>EduMe T9-Converter</h1>
          <Link className="btn t9-btn" to="/t9"><span>Converter</span>📱</Link>
        </div>
        <hr />
        <div className="home-cards d-flex">
          <a href='https://edume.com/' rel="noreferrer" target="_blank">
            <div className="edume-card">
              <p>Go to EduMe for further information!</p>
            </div>
          </a>
          <a href="https://edume.com/onboarding" rel="noreferrer" target="_blank">
            <div className="onboarding-card">
              <p>Onboard people successfully to your company. Check out EduMe.</p>
            </div>
          </a>
          <a href="https://edume.com/request-a-demo" rel="noreferrer" target="_blank">
            <div className="demo-card">
              <p>Booking a demo with EduMe.</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home