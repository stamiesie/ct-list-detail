export const getCharacters = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character');

// destructure results off of json
    const { results } = await res.json(); 

    return results.map((character) => ({
        id: character.id,
        name: character.name,
        image: character.image,
        status: character.status,
        species: character.species,
        gender: character.gender,
    }));
};

export const getCharactersId = async (id) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

    const character = await res.json(); 

    return character;
};
