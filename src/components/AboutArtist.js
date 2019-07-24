import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import uuidv from 'uuid/v4';
import { putArtistDataToState } from '../store/actions/actions';

class ProductView extends React.Component {
  componentDidMount() {
    this.props.putArtistDataToState(this.props.match.params.artist);
  }

  render() {
    return (
      <div>
        {this.props.aboutArtist && (
          <div>
            <h1>{this.props.aboutArtist.name}</h1>
            <div>
              <h3>Images:</h3>
              <div>
                {this.props.aboutArtist.image
                  .map(element => element['#text'])
                  .map(imgUrl => (
                    <img alt="img" key={uuidv()} src={imgUrl} />
                  ))}
              </div>
              <div className="artist-tegs">
                <h3>Tags: </h3>
                {this.props.aboutArtist.tags.tag
                  .map(element => element.name)
                  .map(tag => (
                    <p key={uuidv()}>{tag}</p>
                  ))}
              </div>
            </div>
            <h4>{this.props.aboutArtist.bio.content}</h4>
            <Link to={`/`}>Back to home</Link>
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
