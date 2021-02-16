import logo from './logo.svg';
import './App.css';
import Fraction from './components/fraction'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200px" height="200px" />
        <Fraction />
      </header>
    </div>
  );
}

export default App;
