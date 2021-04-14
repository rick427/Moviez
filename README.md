# Moviez

A movies web application that lets users rent and get the latest information about
the movie industry. Moviez was built with React.js. **Please note**: Due to time limitations
this app was built with a desktop first approach and as such may break if ran on a mobile device.

## Features

1. Dynamic landing page that changes based on new popular movies in the industry
2. A tv shows list
3. A movies list
4. Renting capabailties (_capped at 3 movies per rent_)
5. Movie & tv show details
6. Returning movies & tv shows after renting
7. Context API for state management

## API's

All the movies and information provided on Moviez are live and are constantly updating in real-time.
This is made possible with TMDB's REST API's. Making requests to TMDB's endpoints requires an **Access Key**, which can be gotten by creating a free account with them on https://www.themoviedb.org/.

## How to run

1. Clone or download the repo above
2. In the project root directory, run **npm install** to get all the necessary dependencies
3. Create a .env file in the project root directory and paste your access key from TMDB like so;
   REACT_APP_MOVIE_ACCESS_KEY=**your key here**
4. Run **npm start**
5. Enjoy 😊

## Live URL

To have a quick demo of the Moviez app, please use the link: https://moviez-rental.netlify.app

## Snapshots

### Landing page

<img src="/snapshots/1.PNG" alt="landing Page"/>

### Movies library

<img src="/snapshots/2.PNG" alt="movies Page"/>

### Movie details page

<img src="/snapshots/3.PNG" alt="details Page"/>
