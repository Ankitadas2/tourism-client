import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import Login from './Components/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import AddNewService from './Components/AddNewService/AddNewService';
import Order from './Components/My order/Order';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <AuthProvider>
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route exact path="/home">
           <Home></Home> 
         </Route>
         <Route exact path="/services">
           <Services></Services>
         </Route>
         <Route exact path="/login">
           <Login></Login> 
         </Route>
         <Route path="/addnew">
           <AddNewService></AddNewService>
         </Route>
         <Route  path="/order">
           <Order></Order> 
         </Route>
         <Route  path="/about">
           <About></About>
         </Route>
         <Route  path="/manage">
           <ManageOrder></ManageOrder>
         </Route>
         <PrivateRoute path="/booking/:serviceId">
           <Booking></Booking>
         </PrivateRoute>
       </Switch>
       <Footer></Footer>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
