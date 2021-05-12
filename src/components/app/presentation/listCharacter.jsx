import React from 'react';
import PropTypes from 'prop-types';
import DetailCharacter from './detailCharacter';
import { Link } from 'react-router-dom';

// destructure characters off of props
const ListCharacter = ({ characters }) => (
        <ul aria-label="characters">
            {characters.map((character) => (
             <li key={character.id}>
            <Link to={`/${character.id}`}>
                 <DetailCharacter
                 name={character.name}
                 image={character.image}
                 />
                 </Link>
             </li>   
            ))}
        </ul>
    );  


ListCharacter.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    })
    ).isRequired
};

export default ListCharacter;



