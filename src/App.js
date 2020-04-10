import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import Header from './component/header/header.component';
import './App.css';



function App() {
  return (
    <div>
      <Header />
      {/* I have placed the Header outside of the Switch because switch only displays one component at a time and I want the header to always be displayed */}
      <Switch>
        {/* Switch render only one page the moment one path matches, it avoids accidently rendering multiple components */}
        {/* exact makes it so that the path in this case'/' has to match in order for the component to be rendered */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
      
    </div>
  );
}

export default App;
