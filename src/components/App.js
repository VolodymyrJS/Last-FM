import React from 'react';
import Header from './Header';
import Footer from './Footer';
import TrackList from './TracksList';
import AboutArtist from './AboutArtist';
import { HashRouter as Router, Route } from 'react-router-dom';
import ShowMoreArtistButton from './ShowMoreArtistButton';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={TrackList} />
        <Route path="/product/:artist" component={AboutArtist} />
        <Route exact path="/" component={ShowMoreArtistButton} />
        <Footer />
      </Router>
    );
  }
}

export default App;
