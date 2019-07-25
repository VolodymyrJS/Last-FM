const url = 'https://ws.audioscrobbler.com/2.0/';
const method = '?method=chart.gettoptracks&api_';
const key = 'key=338b9e08c1e5acbef9302a70d6ea86f1';
const format = '&format=json';
const url_about = 'https://ws.audioscrobbler.com/2.0/';
const key_about = 'key=338b9e08c1e5acbef9302a70d6ea86f1';
const format_about = '&format=json';

export const queryTrack = url + method + key + format;

export const queryArtist = artistId => {
  return (
    url_about +
    `?method=artist.getinfo&artist=${artistId}&api_` +
    key_about +
    format_about
  );
};
