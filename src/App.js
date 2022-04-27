import './Styles/App.css';
import { Routes, Route, Link } from "react-router-dom";
import LocalScene from './Components/LocalScene'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LocalScene />
      </header>
    </div>
  );
}

export default App;
