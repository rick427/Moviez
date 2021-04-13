import React, {useContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// pages
import Home from './pages/home';

// components & utilties
import { theme } from './theme';
import { GlobalStyles } from './components/styles/global-styles';

// context
import MoviesProvider from "./context/movies/movies.provider";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>

      <MoviesProvider>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </MoviesProvider>
    </ThemeProvider>
  );
}

export default App;
