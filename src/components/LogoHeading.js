import React from 'react';
import '../LogoHeading.css';

const LogoHeading = () => {
  return(
    <section className="logo-heading-container">
      <div className="heading-wrapper">
        <div className="sub-heading">
          <h6>How do I know which logo style is right for me?</h6>
        </div>
        <div className="main-heading">
          <h2>Different Types of Logo Styles</h2>
        </div>
      </div>
      <div className="contact-btn-container">
        <button className="contact-btn">CONTACT US</button>
      </div>
    </section>
  )
}

export default LogoHeading;