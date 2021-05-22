import './App.css';
import Home from "./comps/Home";
import Nav from "./comps/Nav";
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './comps/Footer';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Home/>
        <Footer />
    </div>
    </Router>
  );
}

export default App;
