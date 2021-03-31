import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Company from './Company';
import services from './Services';
import clients from './Clients';
import {BrowserRouter,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route path='/' component={Home} exact />
        <Route path='/Company' component={Company} exact />
        <Route path='/services' component={services} exact /> 
        <Route path='/clients' component={clients} exact />        
      </BrowserRouter>
    </div>
  );
}

export default App;
