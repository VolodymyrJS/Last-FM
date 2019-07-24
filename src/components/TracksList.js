import React from 'react';
import uuidv from 'uuid/v4';
import TrackPresentation from './TrackPresentation';
import { connect } from 'react-redux';
import '../css/trackList.css';

class DealList extends React.Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-header">Last.fm - Most popular tracks.</h1>
        {this.props.tracks.map(deal => (
          <ol className="track-item" key={uuidv()}>
            <li>
              <TrackPresentation deal={deal} />
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

export default connect(mapStateToProps)(DealList);
