import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Common.css';
import HomeComponent from './home';
import CartDetailsComponent from './CartDetails';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" render={(props)=> <HomeComponent {...props} />} ></Route>
        <Route path="/CartDetails" render={(props)=> <CartDetailsComponent  {...props} /> }  ></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
