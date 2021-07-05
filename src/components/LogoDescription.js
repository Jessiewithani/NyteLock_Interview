import React from 'react';
import '../LogoDescription.css'


const LogoDescription = ({logo, logoEx}) => {

  console.log('img', logoEx)
  
  return (
    <section className="logo-description-wrapper">
      <div className="logo-description-section">
        <div className="logo-title-container">
          <h2 className="logo-title">{`${logo.titleFirst} ${logo.titleLast}`}</h2>
        </div>
        <div className="logo-detail-container">
          <p className="logo-detail">{logo.descriptionOne}</p>
          <br/>
          <br/>
          <p className="logo-detail">{logo.descriptionTwo}</p>
        </div>
      </div>
      <div className="logo-examples-container">
        <img src={logoEx} alt="logo-image" className="logo-images"/>
      </div>
    </section>
  )
}

export default LogoDescription;