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
import Specialist from './Specialist/Specialist';
import NotFound from './NotFound/NotFound';


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
            <Header></Header>
            <ServiceDetails></ServiceDetails>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>
          <Route path="/specialist">
            <Header></Header>
            <Specialist></Specialist>
            <Footer></Footer>
          </Route>
          <Route path="/pricing">
            <Header></Header>
            <TestPrice></TestPrice>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
