import './App.css';
import './index.css'; 
import arrow from './assets/Guidearrow.gif'
import car from './assets/Car.gif';

function App() {
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
        <img src={car} alt="car"/>
      </header>
    </div>
  );
}

export default App;
