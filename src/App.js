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
import About from './Pages/About/About';
import Specialist from './Pages/Specialist/Specialist';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route path="/home">
              <HomePage></HomePage>
            </Route>
            <PrivateRoute path="/serviceDetails">
              <Header></Header>
              <ServiceDetails></ServiceDetails>
              <Footer></Footer>
            </PrivateRoute>
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
            <PrivateRoute path="/specialist">
              <Header></Header>
              <Specialist></Specialist>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/pricing">
              <Header></Header>
              <TestPrice></TestPrice>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
