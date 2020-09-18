import React, { useEffect, useState, useReducer } from 'react';
import Styled from 'styled-components';
import Router from './Components/Router';
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import axios from 'axios';
import UserContext from './contexts/UserContext';
import { baseUrl } from './Components/Configs';
import CartContext from "./contexts/CartContext";
import { storeReducer, initialState } from "./Reducers/store";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e86e5a',
    }
  }
});

const Container = Styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const [profile, setProfile] = useState({})
  const [state, dispatch] = useReducer(storeReducer, initialState);
  let token = localStorage.getItem('token')

  useEffect(() => {

    axios.get(`${baseUrl}/profile`, {
      headers: { auth: token }
    })
      .then(res => {
        setProfile(res.data.user)
      })
      .catch(err => { })
  }, [token])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={profile}>
          <CartContext.Provider value={{ cart: state.cart, dispatch: dispatch }}>
            <Container>
              <Router />
            </Container>
          </CartContext.Provider>
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;