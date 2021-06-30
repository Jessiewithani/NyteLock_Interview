import React from 'react';
import '../LogoCard.css';

const LogoCard = ({icon, title, url}) => {
  return (
    <a href={url}>
      <section className="logo-card">
        <div className="card-wrap">
          {/* this whole card needs to be a link or have a link?? */}
            <div>{icon}</div>
            <h5>{title}</h5>
        </div>
      </section>
    </a>
  )
}

export default LogoCard;