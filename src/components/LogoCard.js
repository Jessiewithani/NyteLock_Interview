import React from 'react';
import '../LogoCard.css';

const LogoCard = ({icon, title, url}) => {
  return (
    <section className="logo-card">
      {/* this whole card needs to be a link or have a link?? */}
      <div>{icon}</div>
      <h5>{title}</h5>
    </section>
  )
}

export default LogoCard;