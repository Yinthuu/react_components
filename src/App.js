import logo from './logo.svg';
import './App.css';
import CompA from './ex_02_compoA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>I make a change!</h1>
        <CompA/>
        <p>B make a change!!!</p>
        <p>B change second time!!!</p>
      </header>
    </div>
  );
}

export default App;
