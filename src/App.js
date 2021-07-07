import React, { useState, useEffect } from 'react';
import './App.css';
import LogoHeading from './components/LogoHeading';
import LogoTypesContainer from './components/LogoTypesContainer';
import LogoDescription from './components/LogoDescription';
import { LogoTypes } from './LogoTypes';


const App = () => {

  const [logo, setLogo] = useState(LogoTypes[0]);
  const [logoEx, setLogoEx] = useState('/images/logo_ex_1.png')

  const handleCardClick = (id) => {
    for (let i = 0; i < LogoTypes.length; i++) {
      if (id === LogoTypes[i].id) {
        setLogo(LogoTypes[i])
        setLogoEx(`/images/logo_ex_${LogoTypes[i].id}.png`)
      }
    }
  }
  return (
    <div className="App">
      <div className="logo-services-container">
        <section className="logo-types-container">
          <div className="logo-types-wrapper">
            <LogoHeading />
            <LogoTypesContainer activeLogo={logo} logos={LogoTypes} handleCardClick={(id) => handleCardClick(id)}/>
          </div>
        </section>
        <section className="logo-description-container">
          <LogoDescription logo={logo} logoEx={logoEx}/>
        </section>
      </div>
    </div>
  );
};

export default App;

// 1. Build the basic HTML layout and add basic CSS for the page based off of a wireframe I created
// 2. Convert the HTML layout to components
// 3. Now that I have my components, I need to create a file with my needed data
// 4. After creating the data, map through the data and make individual logo cards
// 5. After making the cards, I need to connect the descriptions
// 6. After connecting the descriptions we need to set the selected card to be a different color
// 7. After doing that everything else is CSS styling

//If you have any further questions please feel free to ask
//I also have a project board up so you can see the iterations I divided my steps into
