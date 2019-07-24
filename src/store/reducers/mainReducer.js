export default (state, action) => {
  switch (action.type) {
    case 'SHOW_IMAGE':
      return {
        ...state,
        tracks: state.tracks.map(deal => ({
          ...deal,
          isExpanded: deal.listeners === action.dealKey
        }))
      };
    case 'HIDE_TRACK':
      return {
        ...state,
        tracks: state.tracks.filter(artist => {
          return artist.listeners !== action.dealKey;
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
