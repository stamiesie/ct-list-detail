import React, { Component } from 'react';
import ListCharacter from '../components/app/presentation/listCharacter';
import { getCharacters } from '../services/rickAndMortyApi';

// Containers are Class based components

export default class CharactersContainer extends Component {
    state = {
        characters: [],
        loading: true,
    }

    async componentDidMount() {
        const characters = await getCharacters();
        this.setState({
            characters,
            loading: false,
        });
    }

    render() {
        // destructure state
        const { characters, loading } = this.state;

        if (loading) return <h1>Loading...</h1>;

        return <ListCharacter characters={characters} />;
    }
}