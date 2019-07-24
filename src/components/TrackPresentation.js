import React from 'react';
import uuidv from 'uuid/v4';
import { connect } from 'react-redux';
import {
  expandOneDeal,
  hideOneDeal,
  putArtistDataToState
} from '../store/actions/actions';
import { Link } from 'react-router-dom';
import '../css/trackPresentation.css';

class DealItem extends React.Component {
  hideOneDealClick = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.hideOneDeal(this.props.deal.listeners);
  };
  showImagesForOneArtist = event => {
    event.preventDefault();
    this.props.expandOneDeal(this.props.deal.listeners);
  };

  render() {
    const { artist, name, playcount, image } = this.props.deal;
    var imageSrc = image.map(element => element['#text']);
    return (
      <div>
        <div>Artist: {artist.name}</div>
        <div>
          Track: <span className="highlite-track-title">{name}</span>
        </div>
        <div>Playcount: {playcount}</div>
        {this.props.deal.isExpanded && (
          <div className="track-prsentation-image">
            {imageSrc.map(imgUrl => (
              <span key={uuidv()}>
                <img alt="img" key={uuidv()} src={imgUrl} />
              </span>
            ))}
          </div>
        )}
        <div className="artist-button-block">
          <a
            className="hide-track-button"
            href="$"
            onClick={this.hideOneDealClick}
          >
            Hide track
          </a>
          <a
            href="$"
            className="show-image-button"
            onClick={this.showImagesForOneArtist}
          >
            Show image
          </a>
        </div>
        <div>
          <Link className="about-artist-button" to={`/product/${artist.name}`}>
            About artist
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { expandOneDeal, hideOneDeal, putArtistDataToState }
)(DealItem);
