import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './component/pages/homepage/homepage.component';
import ShopPage from './component/pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUpPage from './component/pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';



class App extends React.Component {
 

  unsubscribeFromAuth = null

  componentDidMount () {
    // now that we have stored the user document in our database now we want to update our state with that document
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){ //if the userAuth is not null, if it exists
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })//the state now has all the properties/data of the snapshot and the id
          })
      }
      setCurrentUser(userAuth);//if the userAuth is null(user has signed out) then we want to set the currentUser to null
      
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();

  }


  render() {
  return (
    <div>
      <Header  />
      {/* I have placed the Header outside of the Switch because switch only displays one component at a time and I want the header to always be displayed */}
      <Switch>
        {/* Switch render only one page the moment one path matches, it avoids accidently rendering multiple components */}
        {/* exact makes it so that the path in this case'/' has to match in order for the component to be rendered */}
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>) } />
      </Switch>
      
    </div>
  );
  }
}
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //dispatch lets redux know that whatever ypu're passing me is an action object that needs to be passed to every reducer

})
export default connect(mapStateToProps, mapDispatchToProps)(App);
