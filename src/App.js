import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// pages
import Home from './pages/home';

// components & utilties
import { theme } from './theme';
import Footer from './components/ui/Footer';
import { GlobalStyles } from './components/styles/global-styles';

// context
import MoviesProvider from "./context/movies/movies.provider";
import ShowsProvider from './context/shows/shows.provider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>

      <MoviesProvider>
        <ShowsProvider>
          <Switch>
            <Route path="/" component={Home}/>
          </Switch>
        </ShowsProvider>
      </MoviesProvider>

      <Footer/>
    </ThemeProvider>
  );
}

export default App;
