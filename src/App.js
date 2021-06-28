import logo from './logo.svg';
import './App.css';
import LogoHeading from './components/LogoHeading';
import LogoTypesContainer from './components/LogoTypesContainer';

function App() {
  return (
    <div className="App">
      {/* this is where the header section with the button would be */}
      <section className="logo-services-container">
        <div className="logo-services-wrap">
          <LogoHeading />
          <LogoTypesContainer />
        </div>
      </section>
      <section className="logo-description-container">
        {/* this is where the description component would be */}
      </section>
      {/* this is where the types of logo styles would be */}
    </div>
  );
}

export default App;

// 1. Build the basic HTML layout and add basic CSS for the page based off of a wireframe I created
// 2. Convert the HTML layout to components
// 3. Now that I have my components, I need to create a file with my needed data
