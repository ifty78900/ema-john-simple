import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CartReview from './component/Cart-Review/CartReview';
import Header from './component/Header/Header';
import NotFound from './component/notFound/NotFound';
import ProductDetails from './component/productDetails/ProductDetails';
import Products from './component/Shop/Products.js';

// We have give exact at / route in react routing because it may interprete with other endpoints
//
function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Switch>
          <Route exact path = "/">
            <Products></Products>
          </Route>
          <Route exact path = "/shop">
            <Products></Products>
          </Route>
          <Route exact path = "/Review">
            <CartReview></CartReview>
          </Route>
          <Route exact path = "/Inventory">
            <Products></Products>
          </Route>
          <Route exact path = '/product/:productKey'>
              <ProductDetails></ProductDetails>
          </Route>
          <Route exact path = "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter> 
    </div>
    // For now we have to put every route in the switch
  );
}

export default App;
