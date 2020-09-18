import React from 'react';
import styled from 'styled-components';
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Cart from '../Pages/Cart'
import EditAdress from '../Pages/EditAdress'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Perfil from '../Pages/Perfil'
import RegisterAdress from '../Pages/RegisterAdress'
import Restaurant from '../Pages/Restaurant'
import SignUp from '../Pages/SignUp'
import Intro from '../Pages/Intro';
import EditSignUp from '../Pages/EditSignUp'



const AppContainer = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }

  div.transition-group {
    
  }

  section.route-section {
    margin:0 auto;
    width: 100vw;
    
  }
`;




function Router({ location }) {
    return ( 
        <AppContainer>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames="fade"
          >
      
      
     
      <section className="route-section">
      <Switch location={location}>
                <Route exact path='/cart'>
                    <Cart />
                </Route>
                <Route exact path='/edit-address'>
                    <EditAdress />
                </Route>
                <Route exact path='/home'>
                    <Home />
                </Route>
                <Route exact path='/perfil'>
                    <Perfil />
                </Route>
                <Route exact path='/register-adress'>
                    <RegisterAdress />
                </Route>
                <Route exact path='/restaurant/:id'>
                    <Restaurant />
                </Route>
                <Route exact path='/signup'>
                    <SignUp />
                </Route>
                <Route exact path='/edit-signup'>
                    <EditSignUp />
                    </Route>
                <Route exact path='/' component={Intro}/>
                    
                
                <Route exact path='/login' component={Login} />
                 
            </Switch>
            </section>
    
    
    </CSSTransition>
      </TransitionGroup>
    </AppContainer>
    );
}

export default withRouter(Router)