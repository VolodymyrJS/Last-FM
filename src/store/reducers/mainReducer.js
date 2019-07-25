export default (state, action) => {
  switch (action.type) {
    case 'SHOW_IMAGE':
      return {
        ...state,
        tracks: state.tracks.map(track => ({
          ...track,
          isExpanded: track.listeners === action.trackKey
        }))
      };
    case 'HIDE_TRACK':
      return {
        ...state,
        tracks: state.tracks.filter(artist => {
          return artist.listeners !== action.trackKey;
        })
      };
    case 'SHOW_ALL_TRACKS':
      return {
        ...state,
        tracks: [...state.tracks, ...action.allTracks],
        isFetching: true
      };
    case 'GET_INFO_ABOUT_ARTIST':
      return {
        ...state,
        artistData: action.artistData
      };
    default:
      return state;
  }
};
