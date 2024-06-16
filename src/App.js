import logo from './logo.svg';
import './App.css';
import CompA from './ex_02_compoA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CompA/>
        <h5>I am A.</h5>
      </header>
    </div>
  );
}

export default App;
