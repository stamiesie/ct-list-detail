import React from 'react';
import { render, screen } from '@testing-library/react';
import CharactersContainer from './charactersContainer';
import { MemoryRouter } from 'react-router-dom';

describe('CharactersContainer', () => {
    it('renders a list of characters to the page', async () => {
        render(
            <MemoryRouter>
                <CharactersContainer />
            </MemoryRouter>
        );

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', {name: 'characters'});
        expect(ul).toMatchSnapshot();
    });
});