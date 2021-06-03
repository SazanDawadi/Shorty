import './App.css';
import Home from "./comps/Home";
import Nav from "./comps/Nav";
import { BrowserRouter as Router } from 'react-router-dom';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import Footer from './comps/Footer';


const theme = createMuiTheme({
  palette: {
    primary: green
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme = {theme} >
        <div className="App">
          <Nav />
          <Home/>
          <Footer />
        </div>

      </ThemeProvider>
      
    </Router>
  );
}

export default App;
