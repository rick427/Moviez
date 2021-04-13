import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// pages
import Home from './pages/home';
import Error from './pages/error';
import Movies from './pages/movies';
import ShowDetails from './pages/show-details';
import MovieDetails from './pages/movie-details';

// components & utilties
import { theme } from './theme';
import Footer from './components/ui/Footer';
import ScrollRestoration from './utils/scrollRestore';
import { GlobalStyles } from './components/styles/global-styles';

// context
import ShowsProvider from './context/shows/shows.provider';
import MoviesProvider from "./context/movies/movies.provider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <ScrollRestoration/>

      <MoviesProvider>
        <ShowsProvider>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/show/:name/:showId" component={ShowDetails}/>
            <Route path="/movie/:name/:movieId" component={MovieDetails}/>
            <Route component={Error}/>
          </Switch>
        </ShowsProvider>
      </MoviesProvider>

      <Footer/>
    </ThemeProvider>
  );
}

export default App;
