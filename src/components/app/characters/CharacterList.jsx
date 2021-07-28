import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './CharacterList.css';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li className={styles.CharacterList} key={character.id}>
      <Character
        {...character}
      />
    </li>
  ));

  return <ul>{characterElements}</ul>;

};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default CharacterList;
