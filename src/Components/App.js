import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from "./Header/LogIn/protectedRoute"

import GlobalStyle from './Common/GlobalStyles/globalStyles';

import IndexHeader from './Header/indexHeader';
import IndexHome from './Main/Home/indexHome';
import UserPage from './Main/UserPage/userPage'
import IndexFooter from './Footer/indexFooter';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IndexHeader />
      <Switch>
        <Route 
          exact path='/' 
          component={ IndexHome } 
        />
        <ProtectedRoute  
          exact path='/loged' 
          component={ UserPage } 
        />
        <Route path='*' component={ () => "404 NOT FOUND"} />
      </Switch>
      <IndexFooter />
    </Fragment>
  );
}

export default App;
