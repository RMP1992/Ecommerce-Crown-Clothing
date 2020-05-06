import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';


import './App.css';



class App extends React.Component {
  constructor() {
    super();
    
      this.state ={
        currentUser: null
      }
  }

  unsubscribeFromAuth = null

  componentDidMount () {
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();

  }


  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      {/* I have placed the Header outside of the Switch because switch only displays one component at a time and I want the header to always be displayed */}
      <Switch>
        {/* Switch render only one page the moment one path matches, it avoids accidently rendering multiple components */}
        {/* exact makes it so that the path in this case'/' has to match in order for the component to be rendered */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      
    </div>
  );
  }
}

export default App;
