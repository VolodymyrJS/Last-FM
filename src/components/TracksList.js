import React from 'react';
import uuidv from 'uuid/v4';
import TrackPresentation from './TrackPresentation';
import { connect } from 'react-redux';
import '../css/trackList.css';

class TrackList extends React.Component {
  render() {
    return (
      <div className="app">
        {this.props.tracks.map(track => (
          <ol className="track-item" key={uuidv()}>
            <li>
              <TrackPresentation track={track} />
            </li>
          </ol>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: state.tracks
});

export default connect(mapStateToProps)(TrackList);
