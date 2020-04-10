import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './component/pages/homepage/homepage.component';
import './App.css';

const HatsPage = () =>(
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        {/* Switch render only one page the moment one path matches, it avoids accidently rendering multiple components */}
        {/* exact makes it so that the path in this case'/' has to match in order for the component to be rendered */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
      
    </div>
  );
}

export default App;
