import logo from './logo.svg';
import './App.css';
import CompA from './ex_02_compoA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CompA/>
        <h6>I am A1.</h6>
        <h6>I am A2.</h6>
      </header>
    </div>
  );
}

export default App;
