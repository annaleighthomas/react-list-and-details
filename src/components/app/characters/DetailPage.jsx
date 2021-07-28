import React, { Component } from 'react';
import { getCharacter } from '../../../services/rickAndMortyApi.js';
import styles from './DetailsPage.css';

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
      <div className={styles.DetailPage}>
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>{character.species}</p>
        <p>{character.status}</p>
      </div>
    );
  }
}
