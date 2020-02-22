import React from 'react'
import {AuthRoute, ProtectedRoute} from '../util/RouteUtil'
import HeaderContainer from './header/HeaderContainer'
import GreetingContainer from './greetings/GreetingContainer'
import LoginFormContainer from './auth/LoginFormContainer';
import SignupFormContainer from './auth/SignupFormContainer';

const App = () => (
  <div className="main">
    <header className="header">
      <HeaderContainer />
    </header>
    <div className="body">
      <GreetingContainer />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
    </div>
  </div>
);


export default App;