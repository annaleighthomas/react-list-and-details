import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Character.css';

const Character = ({ name, image, id }) => (
  <figure className={styles.Character}>
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
  id: PropTypes.number.isRequired,
};

export default Character;
