import React, { Component } from 'react';
import { getCharactersId } from '../../services/rickAndMortyApi';
import styles from '/src/components/app/presentation/characters.css';

// Containers are Class based components

export default class Details extends Component {
    state = {
        characters: {},
        loading: true,
    }

    componentDidMount = async () => {
        const characters = await getCharactersId(this.props.match.params.id);
        this.setState({
            characters: characters,
            loading: false,
        });
    }

    render() {
        // destructure props off of characters state
        const { name, image, status, species, gender } = this.state.characters;
        const { loading } = this.state;

        if (loading) return <h1>Loading...</h1>;

        return (
        <div className={styles.charDetailParent}>
            <div className={styles.charDetail}>
                <p>{name}</p>
                <img src={image} alt={name} />
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
            </div>
        </div>
        )
        
    }
}
