import React from 'react';
import './App.scss';

// React Router DOM
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Components
import Navegation from './components/navegation/Navegation';

// Pages
import Search from './pages/search/Search';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PasswordReset from './pages/password-reset/PasswordReset';
import Category from './pages/category/Category';
import Subcategory from './pages/subcategory/Subcategory';



function App() {
  return (
    <>
      <Router>
        <>
        <Navegation productsNumber={10} />

          {/** Dinamic Content **/}
          <Switch>
            <Route path="/" exact>
              <Home  />  
            </Route>

            <Route path="/servicios">
              <h1 className="text-center">
                Esta es la página de Services
              </h1>
            </Route>

            <Route path="/productos" exact>
              <h1 className="text-center">
                Esta es la página de Products
              </h1>
            </Route>

            <Route path="/producto">
              <h1 className="text-center">Single product</h1>
            </Route>

            <Route path="/mi-cuenta">
              <h1 className="text-center">My Count</h1>
            </Route>

            <Route path="/carrito">
              <h1 className="text-center">Cart</h1>
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route path="/busqueda">
              <Search />
            </Route>

            <Route path="/reset-password">
              <PasswordReset />
            </Route>

            <Route path="/categoria">
              <Category />
            </Route>

            <Route path="/subcategoria">
              <Subcategory />
            </Route>

          </Switch>

      </>
      </Router>
    </>
  );
}

export default App;
