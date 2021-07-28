import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, species, status, image, character }) => (
  <figure>
    <Link to={`/character/${character.id}`}>
      <img src={image} alt={name} /></Link>
    <figcaption>
      <p>{name}</p>
      {/* <p>{species}</p>
      <p>{status}</p> */}
    </figcaption>
  </figure >
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired
};

export default Character;
