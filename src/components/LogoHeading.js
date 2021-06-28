import React from 'react';
import '../LogoHeading.css';

const LogoHeading = () => {
  return(
    <section className="logo-header-container">
      <div className="heading-container">
        <h6 className="sub-logo-heading"><span>How do I know which logo is right for me?</span></h6>
        <h2 className="main-logo-heading">Differnt Types of Logo Styles</h2>
      </div>
      <div className="contact-btn-container">
        <button>Contact Us</button>
      </div>
    </section>
  )
}

export default LogoHeading;