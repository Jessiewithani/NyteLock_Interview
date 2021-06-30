import React from 'react';
import '../LogoCard.css';

const LogoCard = ({icon, title, handleLogoClick}) => {
  return (
      <button className="logo-card" onClick={handleLogoClick}>
        <div className="card-wrap">
          {/* this whole card needs to be a link or have a link?? */}
            <div>{icon}</div>
            <h5>{title}</h5>
        </div>
      </button>
    
  )
}

export default LogoCard;