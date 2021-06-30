import React from 'react';
import '../LogoDescription.css'

const LogoDescription = ({logo}) => {

  console.log('logo in desc', logo)
  return (
    <section className="logo-description-wrapper">
      <div className="logo-description-section">
        <div className="logo-title-container">
          <h2 className="logo-title">{logo.title}</h2>
        </div>
        <div className="logo-detail-container">
          <p className="logo-detail">{logo.description}</p>
        </div>
      </div>
      <div className="logo-examples">
        <image src={logo.image} className="logo-images"/>
      </div>
    </section>
  )
}

export default LogoDescription;