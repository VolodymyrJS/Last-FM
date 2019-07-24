import React from 'react';
import TrackList from './TracksList';
import AboutArtist from './AboutArtist';
import { HashRouter as Router, Route } from 'react-router-dom';
import ShowMoreArtistButton from './ShowMoreArtistButton';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={TrackList} />
        <Route path="/product/:artist" component={AboutArtist} />
        <Route exact path="/" component={ShowMoreArtistButton} />
      </Router>
    );
  }
}

export default App;
