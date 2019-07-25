import axios from 'axios';
import { queryTrack, queryArtist } from '../../fetchConfig';

export const expandOneTrack = trackKey => ({ type: 'SHOW_IMAGE', trackKey });

export const hideOneTrack = trackKey => ({ type: 'HIDE_TRACK', trackKey });

export const fetchMoreTracks = () => {
  return async dispatch => {
    const resp = await axios.get(queryTrack);
    dispatch({
      type: 'SHOW_ALL_TRACKS',
      allTracks: resp.data.tracks.track.slice(5)
    });
  };
};

export const putArtistDataToState = artistId => {
  const url = queryArtist(artistId);

  return async dispatch => {
    const resp = await axios.get(url);

    dispatch({
      type: 'GET_INFO_ABOUT_ARTIST',
      artistData: resp.data.artist
    });
  };
};
