import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/Home/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import TestPrice from './Pages/Home/TestPrice/TestPrice';
import About from './About/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route path="/home">
            <HomePage></HomePage>
          </Route>
          <Route path="/serviceDetails">
            <Header />
            <ServiceDetails></ServiceDetails>
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About></About>
            <Footer />
          </Route>
          <Route path="/services">
            <Header />
            <Services />
            <Footer />
          </Route>
          <Route path="/pricing">
            <Header />
            <TestPrice></TestPrice>
            <Footer />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
