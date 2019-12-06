import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from "./Header/LogIn/protectedRoute"

import GlobalStyle from './Common/GlobalStyles/globalStyles';

import Header from './Header/indexHeader';
import Home from './Main/Home/indexHome';
import AboutProject from './Main/AboutProject/indexAbout';
import UserPage from './Main/UserPage/userPage'
import Footer from './Footer/indexFooter';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route 
          exact path='/' 
          component={ Home } 
        />
        <Route
          path='/about'
          component={AboutProject}
        />
        <ProtectedRoute  
          exact path='/loged' 
          component={ UserPage } 
        />
        <Route path='*' component={ () => "404 NOT FOUND"} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;
