import React from 'react';
import PropTypes from 'prop-types';
import DetailCharacter from './detailCharacter';

// destructure characters off of props
const ListCharacter = ({ characters }) => (
        <ul aria-label="characters">
            {characters.map((character) => (
             <li key={character.id}>
                 <DetailCharacter
                 name={character.name}
                 image={character.image}
                 />
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
    ).isRequired,
};

export default ListCharacter;



