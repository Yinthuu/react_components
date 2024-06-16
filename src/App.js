import logo from './logo.svg';
import './App.css';
import CompA from './ex_02_compoA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CompA/>
      </header>
    </div>
  );
}

export default App;
