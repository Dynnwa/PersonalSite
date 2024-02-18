import './Landing.css';
import './index.css'; 
import arrow from './assets/Guidearrow.gif'
import Home from './Home';
import Controller from './Controller';

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
        <img src={arrow} alt='arrow'className="arrow"/>
        <Controller/>
      </header>
      <Home />
    </div>
  );
}

export default Landing;
