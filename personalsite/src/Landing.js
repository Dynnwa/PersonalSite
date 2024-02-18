import './Landing.css';
import './index.css'; 
import arrow from './assets/Guidearrow.gif'
import car from './assets/Car.gif';
import Home from './Home';

function Landing() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Title">
          Welcome to Danny Town
        </p>
        <p className="Sub-header">
          Lets take a Drive
        </p>
        <img src={arrow} alt='arrow'className="img"/>
        <img src={car} alt="car" className="img"/>
      </header>
      <Home />
    </div>
  );
}

export default Landing;
