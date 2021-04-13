import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// pages
import Home from './pages/home';

// components & utilties
import { theme } from './config';
import { GlobalStyles } from './components/styles/global-styles';

// context
import MoviesStateProvider from "./context/movies/movies.state";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>

      <MoviesStateProvider>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </MoviesStateProvider>
    </ThemeProvider>
  );
}

export default App;
