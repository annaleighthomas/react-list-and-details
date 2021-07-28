import React, { Component } from 'react';
import { getCharacter } from '../../../utils';
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
    const { character } = this.state;

    if (!character) return null;

    return (
      <div>
        <h2>{character.name}</h2>
        <img src="{character.image} alt={character.name}" />
        <p>{character.species}</p>
        <p>{character.status}</p>
      </div>
    );
  }
}

DetailPage.propTypes = {
  match: PropTypes.string.isRequired
};

