import { BrowserRouter , Switch,
  Route
   } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Service from './Components/Service/Service';

function App() {
  return (
    <div>
      
      <BrowserRouter >
      <Header></Header>
        <Switch>
         <Route exact path ="/">
          <Home></Home>
          </Route>
          <Route path ="/Home">
          <Home></Home> 
          </Route>
          <Route path ="/Service">
          <Service></Service> 
          </Route>
          <Route path ="/About">
          <About></About>
          </Route>
           <Route path ="/Contact">
          <Contact></Contact>
          </Route> 
          <Route path ="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter >
      <Footer></Footer>
               
           
    </div>
  );
}

export default App;
