import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import storeConfig from './store/storeConfig';
import { Provider } from 'react-redux';
import { queryTrack } from './fetchConfig';

async function getData() {
  const listOfTracks = await axios.get(queryTrack);

  const store = storeConfig({
    tracks: listOfTracks.data.tracks.track.slice(0, 5),
    isFetching: false
  });

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}

getData();
