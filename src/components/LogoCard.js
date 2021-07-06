import React from 'react';
import '../LogoCard.css';


const LogoCard = ({icon, titleFirst, titleLast, handleCardClick, buttonColor}) => {
  return (
      <button className="logo-card" style={{backgroundColor:buttonColor}} onClick={handleCardClick}>
        <div className="card-wrap">
          {/* this whole card needs to be a link or have a link?? */}
            <div className="icon-container">
              <i className={`${icon}`}></i>
            </div>
            <h5 className="logo-name">{`${titleFirst}`}</h5>
            <br></br>
            <h5 className="logo-name-ending">{`${titleLast}`}</h5>
        </div>
      </button>
    
  )
}

export default LogoCard;