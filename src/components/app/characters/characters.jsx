import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, species, status, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>
      <p>{name}</p>
      <p>{species}</p>
      <p>{status}</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
