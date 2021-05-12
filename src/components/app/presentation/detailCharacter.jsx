import React from 'react';
import PropTypes from 'prop-types';
import styles from '/src/components/app/presentation/characters.css';

// destructure params off of props
const DetailCharacter = ({ name, image }) => (
        <div>
           <p>{name}</p>
           <img src={image} />
           {/* <p>{status}</p>
           <p>{species}</p>
           <p>{gender}</p> */}
        </div>
);


DetailCharacter.propTypes = {
name: PropTypes.string.isRequired,
image: PropTypes.string.isRequired,
// status: PropTypes.string.isRequired,
// species: PropTypes.string.isRequired,
// gender: PropTypes.string.isRequired,
};

export default DetailCharacter;

