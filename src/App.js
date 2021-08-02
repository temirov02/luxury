import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import Facilities from './pages/Facilities'
import Rooms from './pages/Rooms';
import Contactus from './pages/Contactus';

function App() {
  return (
   <>
   <Router>
    <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/facilities' component={Facilities}/>
    <Route path='/rooms' component={Rooms}/>
    <Route path='/contactus' component={Contactus}/>
    </Switch>
    </Router>
   </>
  );
}

export default App;
