import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuidv from 'uuid/v4';
import { putArtistDataToState } from '../store/actions/actions';
import '../css/aboutArtist.css';

class ProductView extends React.Component {
  componentDidMount() {
    this.props.putArtistDataToState(this.props.match.params.artist);
  }

  render() {
    return (
      <div className="general-styles-about-artist-page">
        {this.props.aboutArtist && (
          <div>
            <h1 className="artist-name">{this.props.aboutArtist.name}</h1>
            <div>
              <h3>Images:</h3>
              <div>
                {this.props.aboutArtist.image
                  .map(element => element['#text'])
                  .map(imgUrl => (
                    <img alt="img" key={uuidv()} src={imgUrl} />
                  ))}
              </div>
              <h2>
                <div className="highlight-tags-title">Tags: </div>
                {this.props.aboutArtist.tags.tag
                  .map(element => element.name)
                  .map(tag => (
                      <p className="artist-tags" key={uuidv()}>{tag}</p>
                  ))}
              </h2>
            </div>
            <p className="artist-bio-content">{this.props.aboutArtist.bio.content}</p>
            <Link className="back-home-link" to={`/`}>Back to home</Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  aboutArtist: state.artistData
});

export default connect(
  mapStateToProps,
  { putArtistDataToState }
)(ProductView);
