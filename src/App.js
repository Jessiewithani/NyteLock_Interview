import logo from './logo.svg';
import './App.css';
import LogoHeading from './components/LogoHeading';
import LogoTypesContainer from './components/LogoTypesContainer';

function App() {
  return (
    <div className="App">
      <h2>APP</h2>
      {/* this is where the header section with the button would be */}
      <section className="logo-services-container">
        <div className="logo-services-wrap">
          <LogoHeading />
          <LogoTypesContainer />
        </div>
      </section>
      {/* this is where the types of logo styles would be */}
    </div>
  );
}

export default App;
