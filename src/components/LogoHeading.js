import React from 'react';
import '../LogoHeading.css';

const LogoHeading = () => {
  return(
    <section className="logo-heading-container">
      <div className="heading-wrapper">
        <div className="sub-heading">
          <h6 className="h6-heading">
            <span className="sub-heading-span">{"How do I know which logo style is right for me?".toUpperCase()}</span>
          </h6>
        </div>
        <div className="main-heading">
          <h2 className="h2-main-heading">Different Types of Logo Styles</h2>
        </div>
      </div>
      <div className="contact-btn-container">
        <button className="contact-btn">
          <h6 className="contact-us">Contact Us </h6>
          <div className="btn-circle">
            <img src="images/right-arrow-1.svg" className="right-arrow"/>
          </div>
        </button>
      </div>
    </section>
  )
}

export default LogoHeading;