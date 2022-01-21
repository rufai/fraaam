import logo from './logo.svg';
import './App.css';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <motion.p animate={{ opacity:  1 }}>
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
