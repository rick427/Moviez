import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// pages
import Home from './pages/home';
import Movies from './pages/movies';
import MovieDetails from './pages/movie-details';

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
            <Route exact path="/" component={Home}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/movie/:name/:id" component={MovieDetails}/>
          </Switch>
        </ShowsProvider>
      </MoviesProvider>

      <Footer/>
    </ThemeProvider>
  );
}

export default App;
