import React from 'react';
import { render, screen } from '@testing-library/react';
import CharactersContainer from './charactersContainer';

describe('CharactersContainer', () => {
    it('renders a list of characters to the page', async () => {
        render(<CharactersContainer />);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', {name: 'characters'});
        expect(ul).toMatchSnapshot();
    });
});