import React from 'react';
import { connect } from 'react-redux';
import { fetchMoreTracks } from '../store/actions/actions';

class FetchMoreArtistButton extends React.Component {
  render() {
    return (
      <button
        disabled={this.props.isFetching}
        onClick={this.props.fetchMoreTracks}
      >
        Show all tracks
      </button>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { fetchMoreTracks }
)(FetchMoreArtistButton);
