import React from 'react';
import CharacterList from '../components/app/characters/CharacterList';
import { fetchCharacters } from '../services/rickAndMortyApi';

export default class RickAndMorty extends React.Component {
  state = {
    characters: [],
    loading: true
  };

  async componentDidMount() {
    const characters = await fetchCharacters();
    this.setState({ characters, loading: false });
  }
  render() {
    const { characters, loading } = this.state;

    if (loading) return <h1>loading...</h1>;

    return <CharacterList characters={characters} />;
  }
}
