import React , {useState} from 'react';
import '../LogoTypesContainer.css';
import { LogoTypes } from '../LogoTypes';
import LogoCard from '../components/LogoCard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const LogoTypesContainer = () => {

  // const [clicked, setClicked] = useState(false)

  const logoType = LogoTypes.map(type => {
    return <LogoCard 
      key={type.id} 
      icon={type.icon} 
      title={type.title} 
      url={(<Link to={'descriptions/' + type.id} />)}
      // clicked={clicked}
    />
  })
  return (
    <Router>
      <section className="logo-cards-container">
        {/* In here would be the different logo cards */}
        {logoType}
      </section>
    </Router>
  )
}

export default LogoTypesContainer;