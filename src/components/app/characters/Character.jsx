import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Character = ({ name, image, id }) => (
  <figure>
    <Link to={`/detailpage/${id}`}>
      <img src={image} alt={name} /></Link>
    <figcaption>
      <p>{name}</p>
    </figcaption>
  </figure >
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Character;
