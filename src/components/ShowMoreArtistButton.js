import React from 'react';
import { connect } from 'react-redux';
import { fetchMoreTracks } from '../store/actions/actions';
import '../css/showMoreArtistButton.css';

class FetchMoreArtistButton extends React.Component {
  render() {
    return (
        <div className="show-all-tracks-button-wraper">
            <button className="show-all-tracks-button"
                disabled={this.props.isFetching}
                onClick={this.props.fetchMoreTracks}
        >
        Show all tracks
      </button>
        </div>
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
