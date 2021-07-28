import React, { Component } from 'react';
import { getCharacter } from '../../../services/rickAndMortyApi.js';
import PropTypes from 'prop-types';

export default class DetailPage extends Component {
  state = {
    character: null,
    loading: true
  }

  async componentDidMount() {
    const { match } = this.props;
    try {
      const character = await getCharacter(match.params.id);
      console.log(character);
      this.setState({ character });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { character, name, image, species, status } = this.state;

    if (!character) return null;

    return (
      <div>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>{species}</p>
        <p>{status}</p>
      </div>
    );
  }
}

DetailPage.propTypes = {
  match: PropTypes.string.isRequired
};

